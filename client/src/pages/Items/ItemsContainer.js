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
        return <Items items={data.items} />
      }}
    </Query>
  );
}

export default ItemsContainer;
