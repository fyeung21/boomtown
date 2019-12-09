import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HeaderBar from "../../components/Header/Header";
import { Typography, Avatar, Card, CardContent } from "@material-ui/core";

const Profile = ({ classes }) => {
  return (
    <div className={classes.background}>
      <HeaderBar />
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.cardContent}>
            <div className={classes.flexContainer}>
              <Avatar
                alt="Owner"
                src="https://picsum.photos/id/1011/50"
                className={classes.Avatar}
              />
              <Typography
                variant="h4"
                component="h3"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Username
              </Typography>
            </div>

            <Typography variant="h6">
              {"1"} items shared {"0"} items borrowed
            </Typography>

            <Typography variant="body2" component="p">
              "{"No bio provided."}"
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div className={classes.sharedItems}>
        <Typography gutterBottom variant="h4" color="primary">
          Shared Items
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
