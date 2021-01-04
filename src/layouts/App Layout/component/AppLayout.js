import React, { useEffect } from 'react';
import './style.css';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import SecureRoute from '../../../security/SecureRoute'
import Header from '../../Header/index'
import Footer from '../../Footer/index'
import Home from '../../../routes/app/home/index'
import View from '../../../routes/app/view/index'
import Cart from '../../../routes/app/cart/index'
import axios from 'axios';


function AppLayout(props) {
    const [product, setProduct] = React.useState([]);
    useEffect(() => {
        const response = axios.get(`https://fakestoreapi.com/products`).then(result => {
            console.log(result.data);
            setProduct(result.data);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    return (
        <><Header {...props} />
            <Switch>
                <SecureRoute path={`${props.match.url}/home`} component={Home} product={product} />
                <SecureRoute path={`${props.match.url}/view`} component={View} product={product} />
                <SecureRoute path={`${props.match.url}/cart`} component={Cart} />
            </Switch>
            <Footer />
        </>
    );
}

export default withRouter(AppLayout);