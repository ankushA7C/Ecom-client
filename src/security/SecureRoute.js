import React from "react";
import { Route, Redirect } from "react-router-dom";


const SecureRoute = ({ component: Component, ...otherProps }) => (
    <Route
        {...otherProps}
        render={props =>
            true ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);

export default SecureRoute;