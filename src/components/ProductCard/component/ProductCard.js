import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 200,
    },
    image: {
        width: 200,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ProductCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container justify="flex-start" direction="column" spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    Standard license
                                 </Typography>
                                <Typography variant="body1" gutterBottom color="textSecondary" style={{ fontWeight: 'bold' }}>
                                    $19.00
                              </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify="space-evenly" spacing={2}>
                    <Button variant="contained">Add Cart </Button>
                    <Button variant="contained" color="primary">
                        Buy Now
                            </Button>
                </Grid>
            </Paper>
        </div>
    );
}