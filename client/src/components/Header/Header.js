import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import BoomtownLogo from "../../images/boomtown.svg";
import styles from "./styles";

const HeaderBar = ({ classes }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div>
            <IconButton
              edge="start"
              className={classes.homeButton}
              color="inherit"
              aria-label="home"
            >
              <img src={BoomtownLogo} className={classes.siteLogo} />
            </IconButton>
          </div>
          <div className={classes.leftOptions}>
            <IconButton
              edge="start"
              className={classes.shareSomething}
              color="inherit"
              aria-label="share something"
            >
              <AddCircleRoundedIcon className={classes.circleIcon} />
              <Typography variant="body1" component="p">
                SHARE SOMETHING
              </Typography>
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(HeaderBar);
