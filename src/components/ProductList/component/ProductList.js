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

export default function ProductList(props) {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <Grid container justify="center" spacing={1}>
                    {props.product && props.product.map((data, index) => {
                        return (
                            <Grid item>
                                <ProductCard details={data} {...props} />
                            </Grid>
                        )
                    })}

                </Grid>
            </Paper>
        </>
    );
}