import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ classes, tags }) => {
  return (
    <div>
      <div className={classes.shareContainer}>
        <ShareItemPreview className={classes.sharePreview} />
        <div className={classes.shareForm}>
          <ShareItemForm tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
