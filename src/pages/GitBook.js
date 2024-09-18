import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const GitBook = () => (
  <Main
    title="GitBook"
    description="my gitbook"
  >
    <article className="post" id="gitbook">
      <header>
        <div className="title">
          <h2>
            <Link to="/gitbook">GitBook</Link>
          </h2>
        </div>
      </header>
    </article>
  </Main>
);

export default GitBook;
