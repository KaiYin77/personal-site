import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Kai Yin's personal website. Taiwan-based NYCU ECE graduate, "
      + 'Software Engineer @UpbeatTech'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            This elegant React website helps you understand me better
            and showcases my work effectively.
          </p>

        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/resume">resume</Link>, view <Link to="/projects">projects</Link>,{' '}
        or{' '}<Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
