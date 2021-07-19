import Header from '../layout/Header';
import Body from '../layout/Body';
import Footer from '../layout/Footer';
import React, { useEffect, useState, useRef } from 'react';

const Home = ({ second, minute }) => {
  const container = {
    width: '80vw',
    height: '50vh',
    margin: '25vh auto',
    border: 'solid',
  };

  return (
    <div style={container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
