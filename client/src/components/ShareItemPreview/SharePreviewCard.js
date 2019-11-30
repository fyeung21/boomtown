import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const SharePreviewCard = () => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    bigAvatar: {
      width: 60,
      height: 60
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="your-image.jpg"
          title="your image"
        />
        <CardContent>
          <Avatar
            alt="Owner"
            src="/static/images/avatar/1.jpg"
            className={classes.bigAvatar}
          />
          <Typography gutterBottom variant="body1" component="h3">
            Username
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Date-created
          </Typography>

          <Typography variant="h5" component="h1">
            Name your Item
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description here Description here Description here Description here
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="outlined" size="medium" color="primary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default SharePreviewCard;
