import React, { useEffect } from 'react';
import './style.css'
import CartList from '../../../../components/CartList/index'

export default function Cart(props) {
    return (
        <>
            <CartList {...props} />
        </>
    );
}