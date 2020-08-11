import React from "react";
import {Switch, Route} from 'react-router-dom';
import AuthPage from "../Auth/AuthPage";
import GlobalStyle from "../../../internals/templates/global-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import HomePage from "../HomePage/HomePage";
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';

const styles = {
    application: {
        height: '100vh',
        fontFamily: 'Barlow',
    }
}

export class App extends React.Component {
    render() {
        const {classes} = this.props;
            return <div className={classes.application}>
                <Switch>
                    <Route exact path="/">
                        {this.props.isLoggedIn ? <HomePage/> : <AuthPage />}
                    </Route>
                </Switch>
                <GlobalStyle/>
            </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.login.loggedIn,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(App));