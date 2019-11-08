const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 60 * 60 * 1000
  });
}

function generateToken(user, secret) {
  const { id, email, fullname } = user; // Omit the password from the token
  return jwt.sign({ id, email, fullname}, secret, {expiresIn: "2h"});
}

const mutationResolvers = app => ({
  async signup(
    parent,
    {
      user: { fullname, email, password },
    },
    { pgResource, req },
  ) {
    try {
      let saltRounds = 10;

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await pgResource.createUser({
        fullname: fullname,
        email: email,
        password: hashedPassword,
      });

      user.fullname = user.username;

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res,
      });

      return {
        token,
        user,
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(
    parent,
    {
      user: { email, password },
    },
    { pgResource, req },
  ) {
    try {
      const user = await pgResource.getUserAndPasswordForVerification(
        email
      );
      if (!user) throw "User was not found.";

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw "Invalid Password";

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res,
      });

      user.fullname = user.username;

      return {
        token,
        user,
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(
    parent,
    args,
    context
  ) {
    context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
    return true;
  },
  async addItem(
    parent,
    {item},
    {pgResource},
    info
  ) {
    const user = await jwt.decode(context.token, app.get("JWT_SECRET"));
    const newItem = await pgResource.saveNewItem({
      item,
      user,
    });
    return newItem;
  },
});

module.exports = mutationResolvers;