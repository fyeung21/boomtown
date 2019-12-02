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
    this.state = {};
  }
  onSubmit() {
    console.log("test");
  }
  render() {
    const { classes } = this.props;
    console.log(classes);

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={values => {
              const logValues = {
                variables: {
                  user: values
                }
              };
            }}
            render={({ input, meta, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* className={classes.shareItemForm} */}

                <Typography variant="h4" className={classes.headText}>
                  Share. Borrow. Prosper.
                </Typography>

                {/* {!this.state.formToggle && ( */}

                {/* Image Upload*/}
                <input
                  accept="image/*"
                  className={classes.imageInput}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    className={classes.selectImage}
                  >
                    SELECT AN IMAGE
                  </Button>
                </label>

                {/* Item Name */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="itemName">Name your Item</InputLabel>
                  <Field
                    name="itemName"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemName"
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
                  <InputLabel htmlFor="itemDesc">Describe your Item</InputLabel>
                  <Field
                    name="itemDesc"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemDesc"
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
                  // className={classes.textField}
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
