import React from "react";
import { Route, Redirect } from "react-router-dom";


const SecureRoute = ({ component: Component, product: Product, ...otherProps }) => (
    <Route
        {...otherProps}
        render={props =>
            true ? (
                <Component {...props} product={Product} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);

export default SecureRoute;