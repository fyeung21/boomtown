const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The User GraphQL type has two fields that are not present in the
     *  user table in Postgres: items and borrowed.
     *
     *  According to our GraphQL schema, these fields should return a list of
     *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
     *
     */
     async items(parent, args, {pgResource}) {
      try {
        const userLendsItem = await pgResource.getItemsForUser(parent.id);
        return userLendsItem;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed(parent, args, {pgResource}) {
      try {
        const userBorrowsItem = await pgResource.getBorrowedItemsForUser(parent.id);
        return userBorrowsItem;
        
      } catch (e) {
        throw new ApolloError(e);
      }
     }
  },

  Item: {
    /**
     *  @TODO: Advanced resolvers
     *
     *  The Item GraphQL type has two fields that are not present in the
     *  Items table in Postgres: itemowner, tags and borrower.
     *
     * According to our GraphQL schema, the itemowner and borrower should return
     * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
     *
     */
    // @TODO: Uncomment these lines after you define the Item type with these fields
    // async itemowner() {
    //   // @TODO: Replace this mock return statement with the correct user from Postgres
    //   return {
    //     id: 29,
    //     fullname: "Mock user",
    //     email: "mock@user.com",
    //     bio: "Mock user. Remove me."
    //   }
    //   // -------------------------------
    // },
    // async tags() {
    //   // @TODO: Replace this mock return statement with the correct tags for the queried Item from Postgres
    //   return []
    //   // -------------------------------
    // },
    // async borrower() {
    //   /**
    //    * @TODO: Replace this mock return statement with the correct user from Postgres
    //    * or null in the case where the item has not been borrowed.
    //    */
    //   return null
    //   // -------------------------------
    // }
    // -------------------------------
  }
};

module.exports = relationResolvers;
