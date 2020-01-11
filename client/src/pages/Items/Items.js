import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HeaderBar from "../../components/Header/Header";
import { ITEM_QUERY, ALL_ITEMS_QUERY } from "../../apollo/queries";
import { graphql, compose } from "react-apollo";

const Items = ({ classes }) => {
  return (
    <div className={classes.background}>
      <HeaderBar />
      <div className={classes.itemGrid}></div>
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

// export default withStyles(styles)(Items);
