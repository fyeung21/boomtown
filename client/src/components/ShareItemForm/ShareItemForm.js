import React, { Component } from 'react';
import { ItemPreviewContext } from '../../context/ItemProvider';
import { withStyles } from '@material-ui/core/styles';
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
        {{ state, updatePreview, resetPreview }} => {
          /* put Form in here 
          
          <div>
          <p>This is the share form.</p>
        </div>*/
        }
      </ItemPreviewContext.Consumer>
    );
  }
}
export default ShareForm;