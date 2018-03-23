import React from 'react';
import Link from 'gatsby-link';
import './navigation.css';

const Naviagation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/projects/">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Naviagation;