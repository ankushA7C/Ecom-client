import React from 'react';
import './style.css'
import ProductDetails from '../../../../components/ProductDetails/index'

export default function View(props) {
    return (
        <>
            <ProductDetails {...props} />
        </>
    );
}