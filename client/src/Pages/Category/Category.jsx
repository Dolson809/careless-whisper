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
import styles from './Category.styles.js';
import Dialog from '../../Components/Dialog';
import CreateWhisper from '../../Components/Whispers/Create';
import { Link } from 'react-router-dom';
import axios  from "axios";
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
    category: 'personal',
    active: "All"
  }

  handleCreateWhisperSave = () => {
    const newPost = {
        title: this.state.title,
        body: this.state.body,
        category: this.state.category
    }
    
      axios.post("/api/post", newPost).then(({ data }) => {
        this.setState({
            title: '',
            body: '',
            category: 'personal'
        })
        console.log(data);
      });
    
  };
handleCreateWhisperChange = (name) => (event) => {
    this.setState({
        [name]: event.target.value
    })
}
componentDidMount = () => {
  axios.get('/api/saved/' + this.props.match.params.category).then(({data}) => {
    this.setState({
      blog: data.blogs
    })
  })
}

componentDidUpdate = (prevProps, prevState) => {
  if (prevProps.match.params.category !== this.props.match.params.category) {
      this.setState({blog: []});
    axios.get('/api/saved/' + this.props.match.params.category).then(({data}) => {
      this.setState({
        blog: data.blogs
      })
    })
  }
}
handleClicks = () => {
    console.log('this is a click handler');
}

  render = () => {
    const { classes } = this.props;
    return(
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Dialog text="Create a Whisper" buttonId="create-whisper" handleSave={this.handleCreateWhisperSave} >
            <CreateWhisper handleChange={this.handleCreateWhisperChange} 
                title={this.state.title}  
                body={this.state.body}  
                category={this.state.category} />
          </Dialog>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link to={'/category/' + section.toLowerCase()}>
            <Button color="secondary" onClick={this.handleClicks} className={classes.button} key={section}>
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
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents…
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
                        {post.updatedAt}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.body}
                      </Typography>
                      <Button color="secondary" onClick={this.handleClicks} className={classes.button}>
                        Continue reading
                      </Button>
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
