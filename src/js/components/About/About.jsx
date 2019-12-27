import React from 'react';
import sharedStyles from '../../../styles/shared/shared.scss';
import Navigation from '../Navigation';

function About() {
  return (
    <main className={sharedStyles.mainContainer}>
      <h1>About Page</h1>
      <Navigation />
    </main>
  );
}

export default About;
