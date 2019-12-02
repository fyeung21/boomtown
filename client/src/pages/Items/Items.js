import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HeaderBar from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";

const Items = ({ classes }) => {
  return (
    <div className={classes.background}>
      <HeaderBar />
      <div className={classes.itemGrid}>
        <ItemCard className={classes.itemCard} />
        <ItemCard />
        <ItemCard />
      </div>
      <p>
        This is the items page located at <code>/items</code>.
      </p>
    </div>
  );
};

export default withStyles(styles)(Items);
