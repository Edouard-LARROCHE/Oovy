import React from 'react';
import './NeedHelp.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';
import GetMoovie from './GetMoovie';

const NeedHelp = () => {
  return (
    <div>
      <Headerallpages />
      <div className="traitNeedHelp"></div>
      <GetMoovie />
      <Footer />
    </div>
  );
};

export default NeedHelp;
