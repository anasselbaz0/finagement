import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import withStyles from "@material-ui/core/styles/withStyles";
import Masthead from "../../components/General/Masthead";
import Sidebare from "../../components/General/Sidebare";
import {contentHeight} from "../../utils/constants";
import {Route, Switch} from "react-router-dom";
import Welcome from "../../components/Temporary/Welcome";
import Profile from "../../components/Temporary/Profile";
import Exercises from "../Pages/Exercises";

const styles = {
    page: {
        display: 'flex',
        height: contentHeight(),
    },
    content: {
        flex: 1,
        height: '100%',
        padding: '1rem',
    }
}

class HomePage extends Component {

    constructor(props) {
        super(props);
        toast.success('Welcome !', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Masthead/>
                <div className={classes.page}>
                    <Sidebare/>
                    <div className={classes.content}>
                        <Switch>
                            <Route exact path="/" component={Welcome}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/exercises" component={Exercises}/>
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps,)(withStyles(styles)(HomePage));