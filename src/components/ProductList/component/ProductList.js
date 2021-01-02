import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProductCard from '../../ProductCard/index'
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),

    },
}));

export default function ProductList() {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <Grid container justify="center" spacing={1}>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                    <Grid item>
                        <ProductCard />
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}