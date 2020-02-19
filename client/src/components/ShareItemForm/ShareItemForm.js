import React, { Component } from "react";
import { ItemPreviewContext } from "../../context/ItemProvider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import {
  Input,
  InputLabel,
  Button,
  FormControl,
  Typography,
  TextField
} from "@material-ui/core";

import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { graphql, compose } from "react-apollo";
import { Redirect } from 'react-router';

import HomeIcon from "@material-ui/icons/HomeOutlined";
import ToolIcon from "@material-ui/icons/BuildOutlined";
import ElectronicsIcon from "@material-ui/icons/DevicesOutlined";
import SportsIcon from "@material-ui/icons/SportsOutlined";
import MusicIcon from "@material-ui/icons/MusicNoteOutlined";
import BooksIcon from "@material-ui/icons/BookOutlined";
import HappinessIcon from "@material-ui/icons/TagFacesOutlined";


class ShareForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render() {
    const { classes, addItem, tags } = this.props;

    if (this.state.redirect) {
      return <Redirect to='/item' />
    }

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={async values => {

              let itemTags = tags.filter(tag => {
                return values.tags.indexOf(tag.title) !== -1
              })

              const addItemValues = {
                variables: {
                  item: {
                    imageurl: values.imageUrl,
                    title: values.title,
                    description: values.description,
                    tags: itemTags
                  }
                }
              };
              await addItem(addItemValues)
              resetPreview();
              this.setState({
                redirect: true
              })
            }}
            validate={updatePreview}
            render={({ input, meta, handleSubmit, reset }) => (

              <form onSubmit={handleSubmit}>

                <Typography variant="h4" className={classes.headText}>
                  Share. Borrow. Prosper.
                </Typography>

                {/* Image Upload*/}
                <FormControl>
                  <Field
                    name="imageurl"
                    render={({ input, meta }) => (
                      <div>
                        {/* <Input
                          id="imageurl"
                          type="text"
                          className={classes.fieldLength}
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        /> */}
                        <TextField
                          className={classes.fieldLength}
                          type="text"
                          margin="normal"
                          label="Paste image URL here"
                          fullWidth
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      </div>
                    )}
                  />
                </FormControl>

                {/* Item Name */}
                <FormControl fullWidth>
                  <Field
                    name="title"
                    render={({ input, meta }) => (
                      <div>
                        <TextField
                          type="text"
                          margin="normal"
                          label="Name your item"
                          fullWidth
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      </div>
                    )}
                  />
                </FormControl>

                {/* Item Description */}
                <FormControl>
                  <Field
                    name="description"
                    render={({ input, meta }) => (
                      <div>
                        <TextField
                          className={classes.fieldLength}
                          type="text"
                          margin="normal"
                          label="Describe your Item"
                          fullWidth
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      </div>
                    )}
                  />
                </FormControl>

                {/* Add Tags */}
                <FormControl>
                  <Typography variant="body1">Add Tags: </Typography>
                  <div className={classes.tags}>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Household Items"
                      />
                      Household Items
                          <HomeIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Tools"
                      />
                      Tools
                          <ToolIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Electronics"
                      />
                      Electronics
                          <ElectronicsIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Musical Instruments"
                      />
                      Musical Instruments
                          <MusicIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Books"
                      />
                      Books
                          <BooksIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Sports Goods"
                      />
                      Sports Goods
                          <SportsIcon />
                    </label>
                    <label className={classes.tagIcons}>
                      <Field
                        name="tags"
                        component="input"
                        type="checkbox"
                        value="Happiness"
                      />
                      Happiness
                          <HappinessIcon />
                    </label>
                  </div>
                </FormControl>

                {/* Share Button */}
                <Button
                  variant="contained"
                  color="text-secondary"
                  size="medium"
                  onClick={handleSubmit}
                >
                  SHARE
                </Button>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default compose(
  graphql(ADD_ITEM_MUTATION, {
    name: "addItem",
  }),
  withStyles(styles),
)(ShareForm);
