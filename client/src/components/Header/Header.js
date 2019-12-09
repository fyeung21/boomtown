import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from "@material-ui/core";
import BoomtownLogo from "../../images/boomtown.svg";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";


const HeaderBar = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div>
            {/* Boomtown Home */}
            <Link to="/items" className={classes.link}>
              <IconButton
                edge="start"
                className={classes.homeButton}
                color="inherit"
                aria-label="home">
                <img src={BoomtownLogo} className={classes.siteLogo} />
              </IconButton>
            </Link>
          </div>
          <div>
            {/* Share Something */}
            <Link to="/share" className={classes.link}>
              <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.shareSomething}>
                <AddCircleRoundedIcon className={classes.icon} />
                <Typography variant="body1" component="p">
                  SHARE SOMETHING
              </Typography>
              </Button>
            </Link>

            {/* Menu Pop-out */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/profile/:userId" className={classes.link}>
                  <FingerprintIcon className={classes.icon} />Profile
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <PowerSettingsNewIcon className={classes.icon} />Logout
                </MenuItem>
            </Menu>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(HeaderBar);
