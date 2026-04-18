import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;