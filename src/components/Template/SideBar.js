import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kai-Yin</h2>
        <p>
          <a href="mailto:kaiyin.career@gmail.com">kaiyin.career@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Kaiyin. I am a{' '}
        <a href="https://ece.nycu.edu.tw/"> NYCU ECE </a> graduate, Software Engineer of{' '}
        <a href="https://www.upbeattechtw.com/"> UpbeatTech </a>. Previously, I
        gained valuable experience as an intern software engineer at <a href="https://www.inquartik.com.tw/about-us/"> InQuartik </a>,
        and as an intern at <a href="https://www.itri.org.tw/"> ITRI </a> and <a href="https://www.gallopwave.com/"> Gallopwave </a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <> </>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
