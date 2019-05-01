import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './CreateWhisper.styles.js';
import Axios from 'axios';

const category = [
    {
        value: 'Personal',
        label: 'Personal'
    },
    {
        value: 'Sports',
        label: 'Sports'
    },
    {
        value: 'Politics',
        label: 'Politics'
    },
    {
        value: 'Fashion',
        label: 'Fashion'
    },
    {
        value: 'Media',
        label: 'Media'
    },
    {
        value: 'Miscellaneous',
        label: 'Miscellaneous'
    }
];

class CreateWhisper extends React.Component {
    state = {
        name: "",
        category: 'Personal'
    };

    handleChange = name => event => {
      Axios.post("/api/post").then(({data})=> {
        this.setState({
          blog: data.title
      })
        });
    };

  render() {
    const { classes } = this.props;
    return (
    <form className={classes.container} noValidate autoComplete='off'>
        <TextField
        required
        id="filled-required"
        label="Title"
        placeholder="Enter Title"
        className={classes.textField}
        margin="normal"
        variant="filled"
        />
        
      <TextField
      id="filled-select-category-native"
      select
      label="Native select"
      className={classes.textField}
      value={this.state.category}
      onChange={this.handleChange('category')}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText="Please select your category"
      margin="normal"
      variant="filled"
    >
      {category.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>

     <TextField
     id="filled-multiline-static"
     label="Whisper"
     multiline
     rows={25}
     rowsMax={ Infinity }
     defaultValue=""
     className={classes.textField}
     fullWidth
     margin="normal"
     variant="filled"
   />
   </form>
      
    );
  }
}

CreateWhisper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateWhisper);
