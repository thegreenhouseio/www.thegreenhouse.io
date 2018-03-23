import React from 'react';
import Link from 'gatsby-link';
import './header.css';

const Header = () => {
  return (
    <div className="header"> 
      <Link to="/">
        <header></header>
        <h2 className="caption">A DREAMER BY DESIGN</h2>
      </Link>
    </div>
  );
};

export default Header;