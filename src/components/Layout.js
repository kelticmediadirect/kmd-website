import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../custom.scss';

const Layout = ({ children }) => {
  return (
    <div style={{ marginTop: '56px' }}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
