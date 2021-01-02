import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProductCard from '../../../../components/ProductCard/index'
import ProductList from '../../../../components/ProductList/index'
import ProductDetails from '../../../../components/ProductDetails/index'
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),

    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <>
            <ProductDetails />
        </>
    );
}