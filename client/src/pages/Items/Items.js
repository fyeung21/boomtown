import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ITEM_QUERY, ALL_ITEMS_QUERY } from "../../apollo/queries";
import { graphql, compose } from "react-apollo";
import ItemCard from '../../components/ItemCard';

const Items = (props) => {

  console.log("props", props)
  const { getAllItems, classes } = props;
  const { loading, items, error } = getAllItems;


  console.log("all", loading, error, items);

  const getItemsNow = getAllItems.items;

  console.log("items", getItemsNow)

  if (!loading) {
    const getMappedItems = getItemsNow.map(item => {
      console.log(item)
      return (
        item.title
      )
    })

    console.log(getMappedItems)
  }

  return (
    <div className={classes.background}>
      <div className={classes.flex}>
        <div className={classes.itemGrid}>
          {items && items.map(item => {
            console.log(item)
            return (
              <ItemCard
                key={item.id}
                imageUrl={item.imageurl || 'https://via.placeholder.com/300x150.png?text=No+Image+Available'}
                itemTitle={item.title}
                itemOwner={item.itemowner}
                itemDesc={item.description}
                itemTags={item.tags}
                created={item.created}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

const refetchQueries = [
  {
    query: ITEM_QUERY,
  },
];

export default compose(
  graphql(ALL_ITEMS_QUERY, {
    options: {
      refetchQueries,
    },
    name: "getAllItems",
  }),
  withStyles(styles),
)(Items);
