import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";

const styles = {
    button: {
        backgroundColor: COLORS.c5,
        color: COLORS.white,
        padding: '10px 20px',
        width: 'fit-content',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.button}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(Button);