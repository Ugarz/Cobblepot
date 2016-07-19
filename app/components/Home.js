import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1><a href="https://github.com/chentsulin/electron-react-boilerplate">Infos Github</a></h1>
        <div className={styles.container}>
          <h2>Home section</h2>
          <Link to="/counter">to Counter</Link>
          <h2>Passwords section</h2>
          <Link to="/passwords">to Passwords</Link>
        </div>
      </div>
    );
  }
}
