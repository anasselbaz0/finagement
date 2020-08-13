import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import COLORS from "../utils/colors";
import {sidebarWidth} from "../utils/constants";

const styles = {
    welcome: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    title: {
        fontSize: '5rem',
        lineHeight: '7rem',
        color: COLORS.lightGray,
        fontWeight: 800,
        letterSpacing: '2px',
    },
    subtitle: {
        fontSize: '2rem',
        color: COLORS.lightGray,
        fontWeight: 800,
        letterSpacing: '2px',
    }
}

class Profile extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.welcome}>
                <div className={classes.title}> profile </div>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);