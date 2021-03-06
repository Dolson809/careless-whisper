import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Main.styles.js';
import Dialog from '../../Components/Dialog';
import CreateWhisper from '../../Components/Whispers/Create'
import axios  from "axios";
import moment from 'moment';
import { Link } from 'react-router-dom';


const sections = [
  'Personal',
  'Sports',
  'Politics',
  'Fashion',
  'Media',
  'Miscellaneous',
];

class Blog extends React.Component {
  state= {
    blog: [],
    title: '',
    body: '',
    category: '',
    active: "All"
  }

  handleCreateWhisperSave = () => {
    if (!this.state.title.trim() && !this.state.body.trim()) {
      return false;
    }
    const newPost = {
      title: this.state.title,
       body: this.state.body,
       category: this.state.category
    }

    axios.post('/api/post', newPost).then(({ data }) => {
      this.setState({
        title: '',
        body: '',
        category: 'personal',
        blog: [...this.state.blog, data]
      })
      console.log(data);
    });
    return true;
  };

  handleCreateWhisperChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
    return true;
  };

  componentDidMount = () => {
    axios.get('/api/saved').then(({ data }) => {
      this.setState({
        blog: data.blogs
      })
    })
  }

  handleClicks = () => {
    console.log("I've been clicked");
  };

  render = () => {
    const { classes } = this.props;
    return(
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
         <Toolbar className={classes.toolbarMain}>
           <Dialog text="Create a Whisper" buttonId='create-whisper' handleSave={this.handleCreateWhisperSave} >
             <CreateWhisper handleChange={this.handleCreateWhisperChange}
              title={this.state.title}
              body={this.state.body}
              category={this.state.category} />
           </Dialog>
         </Toolbar>
         <Toolbar variant="dense" className={classes.toolbarSecondary}>
           {sections.map(section => (
           <Link to={'/category/' + section.toLowerCase()} key={section}>
            <Button color="secondary" id={section.toLowerCase()} className={classes.button}>
              {section}
            </Button>
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post Title starts here*/}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                {/* Title text starts here*/}
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Careless-Whisper
                  </Typography>
                 
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {this.state.blog.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {moment(post.createdAt).format('MM/YY/DD hh:mm')}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.body}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Careless-Whisper 2019 Patent Pending
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
    )}
}


export default withStyles(styles)(Blog);
