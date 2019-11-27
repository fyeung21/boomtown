import React, { Component } from 'react';
import { ItemPreviewContext } from '../../context/ItemProvider';
import { withStyles } from '@material-ui/core/styles';
import { Form } from 'react-final-form';
import { Field } from 'react-final-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit() {
    console.log('test')
  }
  render() {
    const { classes } = this.props
    console.log(classes)
    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (

          <Form onSubmit={(values) => {
            const logValues = {
              variables: {
                user: values
              }
            }
          }}
            render={({ input, meta, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* className={classes.shareItemForm} */}

                ... fields go here...

                {!this.state.formToggle && (
                  <FormControl fullWidth>
                    <InputLabel htmlFor="fullname">Username</InputLabel>
                    <Field
                      name="fullName" render={({ input, meta }) => (
                        <div>
                          <Input
                            id="fullname"
                            type="text"
                            inputProps={{
                              ...input,
                              autoComplete: 'off'
                            }}
                            value={input.value}
                          />
                        </div>
                      )}
                    />
                  </FormControl>
                )}
                <button type="submit">Submit</button>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}
export default ShareForm