import React, { useEffect } from 'react';
import sharedStyles from '../../../styles/shared/shared.scss';
import Navigation from '../Navigation';
import util from '../../utils/utilExample';

function About() {
  useEffect(() => {
    util();
  }, []);

  return (
    <main className={sharedStyles.mainContainer}>
      <h1>About Page</h1>
      <Navigation />
    </main>
  );
}

export default About;
