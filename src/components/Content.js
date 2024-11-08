import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Content = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Content;
