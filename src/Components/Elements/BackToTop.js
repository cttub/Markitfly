import React, { useState } from 'react';
import arrow from '../../Assets/Icons/uparrow.svg';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <div className="arrow-circle">
        <img src={arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default BackToTop;
