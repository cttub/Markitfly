import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import BackToTop from './Elements/BackToTop';
import MobileCTA from './Elements/MobileCTA';
const Layout = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/Services';

  return (
    <div id="layout">
      <Nav />
      <Outlet />
      <BackToTop />
    </div>
  );
};

export default Layout;
