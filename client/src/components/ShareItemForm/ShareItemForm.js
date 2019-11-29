import React, { Component } from "react";
import { ItemPreviewContext } from "../../context/ItemProvider";
import { withStyles } from "@material-ui/core/styles";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";

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

                {/* {!this.state.formToggle && ( */}
                <input
                  accept="image/*"
                  // className={classes.input}
                  id="uploadImage"
                  multiple
                  type="file"
                />
                <label htmlFor="uploadImage">
                  <Button variant="contained" color="yellow" component="span">
                    SELECT AN IMAGE
                  </Button>
                </label>

                <FormControl fullWidth>
                  <InputLabel htmlFor="itemName">Name your Item</InputLabel>
                  <Field
                    name="itemName"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemName"
                          type="text"
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
                <FormControl fullWidth>
                  <InputLabel htmlFor="itemDesc">Describe your Item</InputLabel>
                  <Field
                    name="itemDesc"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemDesc"
                          type="text"
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
                <FormControl fullWidth>
                  <InputLabel htmlFor="itemTags">Add some Tags</InputLabel>
                  <Field
                    name="itemTags"
                    render={({ input, meta }) => (
                      <div>
                        <Input
                          id="itemTags"
                          type="text"
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
                <TextField
                  // id="addTags"
                  select
                  label="Select"
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
                <Button variant="contained">SHARE</Button>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}
export default ShareForm;
