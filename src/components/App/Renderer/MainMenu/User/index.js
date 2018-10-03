import React, { Component } from 'react';

import PropTypes from 'prop-types';

// import { graphql, compose } from 'react-apollo';
// import gql from 'graphql-tag';

// import Typography from 'material-ui/Typography';
// import Grid from 'material-ui/Grid';
// import IconButton from 'material-ui/IconButton';

// import ConnectedIcon from 'material-ui-icons/SignalCellular4Bar';
// import DisconnectedIcon from 'material-ui-icons/SignalCellularNull';

// import { Link } from 'react-router-dom';
// import TextField from 'material-ui/TextField/TextField';


import UserLink from '../../../../../modules/ui/User/Link';

// import Wallet from '../../Wallet';

// import Subscriber from './Subscriber';

export default class UserMenuItem extends Component {

  static defaultProps = {
  }


  static propTypes = {
    user: PropTypes.object.isRequired,

  }


  static contextTypes = {
    client: PropTypes.object.isRequired,
    // resetStore: PropTypes.func.isRequired,
  };


  constructor(props) {

    super(props);


    this.state = {
    };

  }

  componentDidMount() {


  }


  render() {

    const {
      user,
      // isConnected,
    } = this.props;

    const {
      id,
      username,
      fullname,
      // firstname,
      // lastname,
      email,
      etherwallet,
    } = user;


    let connection;

    return <UserLink
      user={user}
      style={{
        margin: 0,
      }}
    />;

  }

}
