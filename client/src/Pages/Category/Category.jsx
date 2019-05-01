import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import styles from './Category.styles.js';

function posts(props){

    
};

function Category(props) {
    const { classes } = props;

    const handleClicks = () => {
        console.log('clicked');
    };

    // Ordered by category!!!!-------------------------------------------
    return (
        <React.Fragment>
            <Grid container spacing={40} className={classes.cardGrid}>
                {posts.map(post => (
                    <Grid item key={post.title} xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {post.date}
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {post.description}
                                    </Typography>
                                    <Button color="secondary" onClick={handleClicks} className={classes.button}>
                                        Continue reading
                                    </Button>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            Category: {props.match.params.category}
        </React.Fragment>
    );
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);
