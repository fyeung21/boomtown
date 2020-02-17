import React from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';

const ItemsContainer = () => {
  return (
    <Query query={ALL_ITEMS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!`;

        let orderItems = data.items.reverse();
        let items = orderItems.map(item => {
          item.tags = item.tags.map(tag => { return tag.title })
          return item
        });
        return <Items items={items} />
      }}
    </Query>
  );
}

export default ItemsContainer;
