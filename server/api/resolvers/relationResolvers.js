const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items({ id }, args, { pgResource }) {
      try {
        const itemsLentByUser = await pgResource.getItemsForUser(id);
        return itemsLentByUser;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed({ borrowerID }, args, { pgResource }) {
      try {
        const itemsBorrowedByUser = await pgResource.getBorrowedItemsForUser(borrowerID);
        return itemsBorrowedByUser;

      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Item: {
    async itemowner({ ownerID }, args, { pgResource }) {
      try {
        const itemOwner = await pgResource.getUserById(ownerID);
        itemOwner.fullname = itemOwner.username
        return itemOwner;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async tags({ id }, args, { pgResource }) {
      try {
        const tagsForItem = await pgResource.getTagsForItem(id);
        return tagsForItem;

      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrower({ borrowerID }, args, { pgResource }) {
      try {
        if (borrowerID) {
          const borrowerForItem = await pgResource.getUserById(borrowerID);
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
