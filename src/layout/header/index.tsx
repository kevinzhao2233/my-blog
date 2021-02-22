import React from 'react';
import './index.scss';

const Header: React.FC = () => (
  <div className="app-header">
    <div className="logo" />
    <ul className="nav-box">
      <li className="nav-item cursor-p">导航1</li>
      <li className="nav-item cursor-p">导航2</li>
    </ul>
    <div className="extra" />
  </div>
);

export default Header;
