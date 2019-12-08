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
  TextField,
  MenuItem,
  Typography,
  Checkbox
} from "@material-ui/core";

const tags = [
  {
    value: "householdItems",
    label: "Household Items"
  },
  {
    value: "tools",
    label: "Tools"
  },
  {
    value: "electronics",
    label: "Electronics"
  },
  {
    value: "physicalMedia",
    label: "Physical Media"
  },
  {
    value: "sportingGoods",
    label: "Sporting Goods"
  },
  {
    value: "physicalMedia",
    label: "Physical Media"
  },
  {
    value: "musicalInstruments",
    label: "Musical Instruments"
  },
  {
    value: "recreational",
    label: "Recreational"
  }
];

// const [addTag, setTags] = React.useState("Add some Tags");

//     const handleChange = event => {
//       setTags(event.target.value);
//     };

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  onSubmit() {
    console.log("test");
  }
  render() {
    const { classes, addItem } = this.props;
    console.log(classes);

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={values => {
              const addItemValues = {
                variables: {
                  item: {
                    imageurl: values.imageUrl,
                    title: values.itemTitle,
                    description: values.itemDesc,
                    tags: values.tags
                  }
                }
              };
              addItem(addItemValues)
            }}
            validate={updatePreview}
            render={({ input, meta, handleSubmit }) => (
              <form onSubmit={handleSubmit}
                onChange={e => updatePreview(e.target.name, e.target.value)}>

                <Typography variant="h4" className={classes.headText}>
                  Share. Borrow. Prosper.
                </Typography>

                {/* {!this.state.formToggle && ( */}

                {/* Image Upload*/}
                <FormControl>
                  <Field
                    name="imageUrl"
                    render={({ input }) => (
                      <div>
                        <input
                          accept="image/*"
                          className={classes.imageInput}
                          id="contained-button-file"
                          multiple
                          type="file"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.selectImage}
                        >
                          SELECT AN IMAGE
                      </Button>
                      </div>
                    )}
                  />
                </FormControl>

                {/* Item Name */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="itemTitle">Name your Item</InputLabel>
                  <Field
                    name="itemTitle"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemTitle"
                          type="text"
                          className={classes.fieldLength}
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
                <FormControl fullWidth>
                  <InputLabel htmlFor="description">Describe your Item</InputLabel>
                  <Field
                    name="description"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="description"
                          type="text"
                          className={classes.fieldLength}
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
                <TextField
                  // id="addTags"
                  select
                  label="Add some Tags"
                  className={classes.fieldLength}
                // value={addTag}
                // onChange={handleChange}
                // SelectProps={{
                //   MenuProps: {
                //     className: classes.menu
                //   }
                // }}
                // helperText="Please select your tags"
                // margin="normal"
                >
                  {tags.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox />
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {/* )} // for using state */}

                {/* Share Button */}
                <Button
                  variant="contained"
                  color="text-secondary"
                  size="medium"
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
export default withStyles(styles)(ShareForm);
