import React from 'react';
import {withStyles} from "@material-ui/core";
import COLORS from "../../utils/colors";
import Logo from "./Logo";
import {mastheadHeight} from "../../utils/constants";
import {ExitToApp} from "@material-ui/icons";
import {connect} from 'react-redux';

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
        margin: '0 2rem',
        padding: '6px 1rem',
        '&:hover': {
            background: COLORS.c1,
        },
        cursor: 'pointer'
    },
    logoutIcon: {
        marginLeft: '1rem',
    },
}

function Masthead(props) {
    const {classes} = props;
    return (
        <div className={classes.masthead}>
            <Logo/>
            <div>
                <span> {props.email} </span>
                <span className={classes.logoutButton} edge='start'>
                    Logout <ExitToApp className={classes.logoutIcon}/>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.user.email,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Masthead));