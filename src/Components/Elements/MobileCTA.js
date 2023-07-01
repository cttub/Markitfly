import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileCTA = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/Services';

  return (
    <div className="cta-mobile">
      <Link
        className="contact-cta"
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
  );
};

export default MobileCTA;
