import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './CreateWhisper.styles.js';


const category = [
    {
        value: 'personal',
        label: 'Personal',
    },
    {
        value: 'sports',
        label: 'Sports'
    },
    {
        value: 'politics',
        label: 'Politics'
    },
    {
        value: 'fashion',
        label: 'Fashion'
    },
    {
        value: 'media',
        label: 'Media'
    },
    {
        value: 'miscellaneous',
        label: 'Miscellaneous'
    }
];

class CreateWhisper extends React.Component {

  // handleChange = name => event => {
  //   Axios.post("/api/post").then(({ data }) => {
  //     this.setState({
  //       title: data.blogs.title,
  //       category: data.blogs.category,
  //       body: data.blogs.body
  //     })
  //     console.log(data);
  //   });
  // };

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
        onChange={this.props.handleChange('title')}
        value={this.props.title}
        margin="normal"
        variant="filled"
        />
        
      <TextField
      id="filled-select-category-native"
      select
      label="Native select"
      className={classes.textField}
      value={this.props.category}
      onChange={this.props.handleChange('category')}
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
     className={classes.textField}
     fullWidth
     value={this.props.body}
     onChange={this.props.handleChange('body')}
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
