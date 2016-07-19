import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Passwords.css';
const json = require('../assets/json/datas.json');

export default class Passwords extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Passwords</h2>
          <Link to="/home">to Home</Link>
        </div>
      </div>
    );
  }
}
