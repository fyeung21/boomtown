import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HeaderBar from "../../components/Header/Header";

const Items = ({ classes }) => {
  return (
    <div className={classes.background}>
      <HeaderBar />
      <div className={classes.itemGrid}></div>
    </div>
  );
};

export default withStyles(styles)(Items);
