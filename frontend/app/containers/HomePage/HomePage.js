import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toast} from "react-toastify";

class HomePage extends Component {

    constructor(props) {
        super(props);
        toast.success('Welcome !', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    render() {
        return (
            <div>
                hoome
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(HomePage);