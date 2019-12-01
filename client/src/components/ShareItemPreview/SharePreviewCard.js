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
import Box from "@material-ui/core/Box";

const SharePreviewCard = ({
  imageurl,
  //   itemowner,
  title,
  description,
  date
}) => {
  const useStyles = makeStyles({
    card: {
      width: 410,
      height: 510,
      marginRight: 50
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
        {/* Card Image */}
        <CardMedia
          className={classes.media}
          image={imageurl}
          title="your image"
        />
        <CardContent>
          <Box display="flex">
            {/* Owner Info */}
            <Avatar
              alt="Owner"
              src="/static/images/avatar/1.jpg"
              className={classes.bigAvatar}
            />
            <div className="userInfo">
              <Typography variant="body1" component="h3">
                itemowner
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {date}date
              </Typography>
            </div>
          </Box>

          {/* Item Info */}
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {/* Borrow Button */}
        <Button gutterBottom variant="outlined" size="medium" color="primary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default SharePreviewCard;
