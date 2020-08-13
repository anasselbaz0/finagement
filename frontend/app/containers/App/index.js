import React from "react";
import {Switch, Route} from 'react-router-dom';
import AuthPage from "../Auth/AuthPage";
import GlobalStyle from "../../../internals/templates/global-styles";
import withStyles from "@material-ui/core/styles/withStyles";
import HomePage from "../HomePage/HomePage";
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import COLORS from "../../utils/colors";

const styles = {
    application: {
        height: '100vh',
        fontFamily: 'Barlow',
        background: COLORS.c1,
        color: COLORS.white,
    }
}

export class App extends React.Component {
    render() {
        const {classes} = this.props;
            return <div className={classes.application}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Switch>
                    <Route path="/">
                        {this.props.isLoggedIn ? <HomePage/> : <AuthPage />}
                    </Route>
                </Switch>
                <GlobalStyle/>
            </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.loggedIn,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(App));