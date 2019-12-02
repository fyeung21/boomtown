import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Typography from "@material-ui/core/Typography";
import HeaderBar from "../../components/Header/Header";

const Share = ({ classes }) => {
  return (
    <div>
      <HeaderBar />
      <div className={classes.shareContainer}>
        <ShareItemPreview className={classes.sharePreview} />
        <div className={classes.shareForm}>
          <Typography variant="h3" className={classes.headline}>
            Share. Borrow. Prosper.
          </Typography>
          <ShareItemForm />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
