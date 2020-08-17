import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import COLORS from "../../utils/colors";
import {connect} from "react-redux";
import {sidebarWidth} from "../../utils/constants";
import {Link} from "react-router-dom";

const styles = {
    sidebar: {
        background: COLORS.c0,
        // padding: '1rem',
        width: sidebarWidth(),
        height: '100%'
    },
    icon: {
        color: COLORS.lightGray,
    },
    list: {
        color: COLORS.lightGray,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginTop: '4px'
    },
    button: {
        marginBottom: '4px',
        width: '100%',
        padding: '1rem',
        background: COLORS.whiteo,
        cursor: 'pointer'
    },
}

class Sidebare extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.sidebar}>
                <div className={classes.list}>
                    <Link to='/profile'>
                        <div className={classes.button}> my profile </div>
                    </Link>
                    <Link to='/exercises'>
                        <div className={classes.button}> exercises </div>
                    </Link>
                    <Link to='/statistics'>
                        <div className={classes.button}> statistics </div>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(withStyles(styles)(Sidebare));