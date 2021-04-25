/**
 * The Login Form component
 */
import { get } from 'lodash';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './Login.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    gridTemplateColumns: 'repeat(24, 1fr)',
    overflow: 'hidden'
  },
  card: {
    maxHeight: 'auto',
    maxWidth: '100%',
    minHeight: '300px',
    minWidth: '250px',
    textAlign: 'center'
  },
  footer: {
    background: '#ececec'
  },
  submit: {
    fontWeight: 'bold',
    marginTop: '50%'
  }
}));

const loginUrl = `${process.env.REACT_APP_API_TARGET}/login`;

export default function Login(props) {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.containerFlexCenter}>
        <div className={styles.formContainer}>
          <Card
            classes={{
              root: classes.card
            }}
          >
            <h3>Welcome to Spotify Data Analysis</h3>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              href={loginUrl}
              classes={{
                root: classes.submit
              }}
            >
              Log In With Spotify
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
