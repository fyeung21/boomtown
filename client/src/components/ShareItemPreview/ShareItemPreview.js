import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { ItemPreviewContext } from "../../context/ItemProvider";
import ItemCard from "../ItemCard/ItemCard";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          return (
            <ItemCard
              imageUrl={state.item.imageurl}
              itemTitle={state.item.title}
              itemOwner={state.item.itemowner}
              itemDesc={state.item.description}
              itemTags={state.item.tags}
            />
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
