import React from 'react';

import Footer from './Footer';
import style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
