import React from 'react';
import Link from 'gatsby-link';
import './header.css';

// TODO fix why bombs out because of <Link> being used in the component
// https://github.com/thegreenhouseio/www.thegreenhouse.io/issues/34
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