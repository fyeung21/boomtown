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
    async items(parent, args, { pgResource }) {
      try {
        const itemsLentByUser = await pgResource.getItemsForUser(parent.id);
        return itemsLentByUser;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed(parent, args, { pgResource }) {
      try {
        const itemsBorrowedByUser = await pgResource.getBorrowedItemsForUser(parent.borrowerID);
        return itemsBorrowedByUser;

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
    async itemowner() {
      try {
        const itemOwner = await pgResource.getUserById(parent.ownerID);
        return itemOwner;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags() {
      try {
        const tagsForItem = await pgResource.getTagsForItem(parent.id);
        return tagsForItem;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower() {
      try {
        if (parent.id) {
          const borrowerForItem = await pgResource.getUserById(parent.borrowerID);
          return borrowerForItem;
        } else {
          return null;
        }
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
