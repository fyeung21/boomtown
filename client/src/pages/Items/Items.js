import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemCard from '../../components/ItemCard';

const Items = (props) => {

  const { classes, items } = props;

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

export default withStyles(styles)(Items);
