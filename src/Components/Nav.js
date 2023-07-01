import React, { useState, useEffect } from 'react';
import logo from '../Assets/markitfly.png';
import { Link, useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Nav = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/Services';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            className='contact-cta'
            onClick={() => {
              document.querySelector('html').scrollTo(0, 0);
            }}
            to={isServicePage ? '/Consult' : '/Services'}
          >
            <button>
              {isServicePage ? 'Contact Us' : 'See our Services'}
            </button>
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default Nav;
