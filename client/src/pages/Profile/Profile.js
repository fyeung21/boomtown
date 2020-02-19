import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Typography, Avatar, Card, CardContent } from "@material-ui/core";
import ItemCard from "../../components/ItemCard";

const Profile = (props) => {

  const { classes, items, data } = props;


  return (
    <div className={classes.background}>
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
                {data.user.fullname}
              </Typography>
            </div>

            <Typography variant="h6">
              {items.length} item(s) shared {"0"} items borrowed
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
      <div className={classes.itemGrid}>
        {items && items.map(item => {
          console.log(item)
          return (
            <ItemCard
              key={item.id}
              imageUrl={item.imageurl || 'https://via.placeholder.com/300x150.png?text=No+Image+Available'}
              itemTitle={item.title}
              itemOwner={item.itemowner}
              itemDesc={item.description}
              itemTags={item.tags}
              created={item.created}
            />
          )
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
