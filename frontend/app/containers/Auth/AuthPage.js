import React, {Component} from 'react';
import {connect} from 'react-redux';
import background from '../../images/background.jpg';
import withStyles from "@material-ui/core/styles/withStyles";
import Login from "../../components/Auth/Login";

const styles = {
    container: {
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize:'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}


class AuthPage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Login/>
            </div>
        );
    }
}

export default withStyles(styles)(AuthPage);