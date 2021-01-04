import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CartCard from '../../CartCard/index'
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),

    },
}));

export default function CartList(props) {
    const classes = useStyles();
    let list = useSelector(state => state.cart.list);
    return (
        <>
            <Paper className={classes.paper}>
                <Grid container justify="center" spacing={1}>
                    {list && list.map((data, index) => {
                        return (
                            <Grid item>
                                <CartCard details={data} {...props} />
                            </Grid>
                        )
                    })}

                </Grid>
            </Paper>
        </>
    );
}