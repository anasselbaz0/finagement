import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import COLORS from "../utils/colors";
import Button from "./Button";
import Logo from "./Logo";
import {mastheadHeight} from "../utils/constants";
import IconButton from '@material-ui/core/IconButton';
import {ExitToApp} from "@material-ui/icons";

const styles = {
    masthead: {
        background: COLORS.c0,
        height: mastheadHeight(),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoutButton: {
        color: COLORS.white,
        fontSize: '1rem',
        marginRight: '2rem',
        padding: '5px 1rem',
        '&:hover': {
            background: COLORS.c1,
        },
        cursor: 'pointer'
    },
    logoutIcon: {
        marginLeft: '1rem',
    },
}

class Masthead extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.masthead}>
                <Logo/>
                <div className={classes.logoutButton} edge='start'>
                    Logout <ExitToApp className={classes.logoutIcon}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Masthead);