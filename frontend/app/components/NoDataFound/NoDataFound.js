import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import noData from '../../images/noData.svg';
import Translate from '../../utils/Translate';

const styles = {
  noData: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    left: '46%',
    color: '#728397',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  m10: {
    margin: '15px 0 6px 0',
  },
};

class NoDataFound extends Component {
  render() {
    const { classes, msg } = this.props;
    return (
      <div className={classes.noData}>
        <img src={noData} alt="No data found"/>
        <div className={classes.m10}>
          {msg}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NoDataFound);
