import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {connect} from 'react-redux';
import COLORS from "../../utils/colors";
import {sidebarWidth} from "../../utils/constants";

const styles = {
    logo: {
        fontSize: '1.5rem',
        color: COLORS.c6,
        fontWeight: 800,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        background: COLORS.c1,
        width: sidebarWidth(),
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

class Logo extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.logo}>
                Finagement
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(withStyles(styles)(Logo));