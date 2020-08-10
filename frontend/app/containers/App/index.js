import React from "react";
import {Switch, Route} from 'react-router-dom';
import AuthPage from "../Auth/AuthPage";
import GlobalStyle from "../../../internals/templates/global-styles";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    application: {
        height: '100vh',
        fontFamily: 'Barlow'
    }
}

export class App extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.application}>
                <Switch>
                    <Route exact path='/' component={AuthPage}/>
                </Switch>
                <GlobalStyle/>
            </div>
        );
    }
}

export default withStyles(styles)(App);