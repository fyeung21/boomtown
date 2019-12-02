import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const ItemCard = ({
  imageurl,
  //   itemowner,
  title,
  description,
  date,
  classes
}) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* Card Image */}
        <CardMedia
          className={classes.media}
          image={imageurl}
          title="your image"
        />
      </CardActionArea>

      <CardActionArea>
        <CardContent className={classes.cardContainer}>
          <div className={classes.ownerInfo}>
            {/* Owner Info */}
            <Avatar
              alt="Owner"
              src="https://picsum.photos/id/1011/50"
              className={classes.Avatar}
            />
            <div className={classes.ownerName}>
              <Typography
                variant="body1"
                component="h3"
                className={classes.text}
              >
                itemowner
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                {date}date
              </Typography>
            </div>
          </div>

          {/* Item Info */}
          <div className={classes.itemInfo}>
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardContainer}>
        {/* Borrow Button */}
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.button}
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ItemCard);
