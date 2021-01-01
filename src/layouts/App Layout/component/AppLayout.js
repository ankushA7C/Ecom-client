import React from 'react';
import './style.css';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import SecureRoute from '../../../security/SecureRoute'
import Home from '../../../routes/app/home/index'

function AppLayout(props) {
    return (
        <>AppLayout
            <Switch>
                <SecureRoute path={`${props.match.url}/home`} component={Home} />
            </Switch>
        </>
    );
}

export default withRouter(AppLayout);