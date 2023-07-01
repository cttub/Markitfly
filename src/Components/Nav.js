import React, { Component } from 'react';
import logo from '../Assets/markitfly.png';
import { Link, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Nav = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/Services';

  return (
    <>
    <Fade down>
    <div id='nav'>
      <Link
        onClick={() => {
          document.querySelector('html').scrollTo(0, 0);
        }}
        to="/"
      >
        <img src={logo} alt="Markitfly logo" />
      </Link>

      <Link
        className="contact-cta"
        onClick={() => {
          document.querySelector('html').scrollTo(0, 0);
        }}
        to="/Services"
      >
        <button>
          {isServicePage ? 'Contact Us' : 'See our Services'}
        </button>
      </Link>
    </div></Fade>
    </>
  );
};

export default Nav;
