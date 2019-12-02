import React, { Component } from "react";
import { ItemPreviewContext } from "../../context/ItemProvider";
import { withStyles } from "@material-ui/core/styles";
import SharePreviewCard from "./SharePreviewCard.js";

import styles from "./styles";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          console.log(state);
          return (
            <SharePreviewCard
              imageurl={state.item.imageurl}
              title={state.item.title}
              //   itemowner={state.item.itemowner}
              description={state.item.description}
            />
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
