import React from 'react';
import Link from 'gatsby-link';
import './navigation.css';

// TODO fix why bombs out because of <Link> being used in the component
// https://github.com/thegreenhouseio/www.thegreenhouse.io/issues/34
const Naviagation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/projects/">Projects</Link></li>
          <li><Link to="/blog/">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Naviagation;