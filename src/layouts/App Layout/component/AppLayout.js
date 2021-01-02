import React from 'react';
import './style.css';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import SecureRoute from '../../../security/SecureRoute'
import Header from '../../Header/index'
import Footer from '../../Footer/index'
import Home from '../../../routes/app/home/index'

function AppLayout(props) {
    return (
        <><Header />
            <Switch>
                <SecureRoute path={`${props.match.url}/home`} component={Home} />
            </Switch>
            <Footer />
        </>
    );
}

export default withRouter(AppLayout);