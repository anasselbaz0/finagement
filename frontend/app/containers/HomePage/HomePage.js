import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {
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