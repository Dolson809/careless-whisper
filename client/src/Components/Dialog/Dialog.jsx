import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Axios  from "axios";
import styles from './Dialog.styles.js';
import axios from "axios";
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log('clicked');
  };

  handleClose = () => {
      axios.post("/api/post").then(({data})=> {
        this.setState({
          blog: data.title
      })
        });
    
      Axios.post("/api/post").then(({ data }) => {
        this.setState({
          title: data.blogs.title,
          category: data.blogs.category,
          body: data.blogs.body
        })
        console.log(data);
      });
    
  };

  handleClose = () => {
    console.log("submited blog")
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button id={this.props.buttonId} variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {this.props.text}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              
            </Typography>
            <Button color="inherit" onClick={this.handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
