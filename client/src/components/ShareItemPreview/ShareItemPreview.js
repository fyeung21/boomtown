import React, { Component } from "react";
import { ItemPreviewContext } from "../../context/ItemProvider";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => (
          <div>
            <img src={state.item.imageurl} />
            <h1>{state.item.title} </h1>
            <h1>{state.item.desc}</h1>
          </div>
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
