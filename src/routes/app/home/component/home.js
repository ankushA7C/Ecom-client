import React, { useEffect } from 'react';
import './style.css'
import ProductList from '../../../../components/ProductList/index'

export default function Home(props) {
    return (
        <>
            <ProductList {...props} />
        </>
    );
}