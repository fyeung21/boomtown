import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SharePreviewCard from "../../components/ShareItemPreview/SharePreviewCard";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import HeaderBar from "../../components/Header/Header";

const Profile = ({ classes }) => {
  return (
    <div>
      <HeaderBar />
      <p>
        This is the profile page located at <code>/profile/:userId</code>.
      </p>
      <Avatar
        alt="Owner"
        src="/static/images/avatar/1.jpg"
        className={classes.bigAvatar}
      />
      <Typography
        gutterBottom
        variant="h3"
        color="textSecondary"
        component="h3"
      >
        Username
      </Typography>
      <Typography gutterBottom variant="body1" component="h3">
        Items Shared
      </Typography>
      <Typography gutterBottom variant="body1" component="h3">
        Items borrowed
      </Typography>
      <Typography variant="body1" component="h3">
        "No bio provided"
      </Typography>
      <Typography gutterBottom variant="h4" color="primary" component="h3">
        Shared Items
      </Typography>
      <SharePreviewCard />
    </div>
  );
};

export default withStyles(styles)(Profile);
