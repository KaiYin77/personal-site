import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Gallery/Carousel';
import data from '../data/galleries';
import Main from '../layouts/Main';

const Gallery = () => {
  const imageUrls = data.map((item) => `${process.env.PUBLIC_URL}${item.image}`);
  return (
    <Main title="Gallery" description="My gallery of photos using Ricoh GR III">
      <article className="post" id="Gallery" style={{ height: '100%' }}>
        <header>
          <div className="title">
            <h2>
              <Link to="/gallery">Gallery</Link>
            </h2>
          </div>
        </header>
        <Carousel images={imageUrls} />
      </article>
    </Main>
  );
};

export default Gallery;
