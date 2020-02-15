import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import HeaderBar from "../../components/Header/Header";

const Share = ({ classes }) => {
  return (
    <div>
      <div className={classes.shareContainer}>
        <ShareItemPreview className={classes.sharePreview} />
        <div className={classes.shareForm}>
          <ShareItemForm />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
