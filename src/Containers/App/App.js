import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from '../../Components/Login/Login';
import styles from './App.module.css';

/**
 * Renders app component
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };

    if (props.isLoggedIn) {
      props.getCurrentUser();
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;

    return (
      <div className={styles.app}>
        <Switch>
          <Route
            path="/login"
            exact
            render={props => <Login {...props} width={width} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
