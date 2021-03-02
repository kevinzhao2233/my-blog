import React from 'react';
import './index.scss';
import Header from '../../layout/header';
import SayHi from './components/sayHi/index';
import Plate from './components/plate/index';

const Home: React.FC = () => (
  <div className="page-home">
    <Header />
    <SayHi />
    <Plate />
  </div>
);

export default Home;
