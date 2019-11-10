const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      console.log(user)
      user.fullname = user.username
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, {filter}, { pgResource }, info) {
    try {
      const items = await pgResource.getItems(filter);
      console.log(items)
      items.itemowner = items.ownerID;
      items.imageurl = items.imageURL;
      return items;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      const tags = await pgResource.getTags();
      console.log(tags)
      return tags;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
});

module.exports = queryResolvers;