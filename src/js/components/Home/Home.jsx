import React from 'react';
import sharedStyles from '../../../styles/shared/shared.scss';
import styles from './Home.module.scss';
import Navigation from '../Navigation';
import reactLogo from '../../../images/react.svg';

function Home() {
  return (
    <main className={sharedStyles.mainContainer}>
      <header className={styles.imgContainer}>
        <img src={reactLogo} alt="React Logo" />
      </header>
      <h1>SPA React Starter</h1>
      <Navigation />
    </main>
  );
}

export default Home;
