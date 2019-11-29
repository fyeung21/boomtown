import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";
import Typography from "@material-ui/core/Typography";
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ classes }) => {
  return (
    <div>
      <p>
        This is the share page located at <code>/share</code>.
      </p>
      <ShareItemPreview />
      <Typography variant="h3" className={classes.headline}>
        Share. Borrow. Prosper.
      </Typography>
      <ShareItemForm />
    </div>
  );
};

export default withStyles(styles)(Share);
