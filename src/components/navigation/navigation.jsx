import React from "react";
import Link from 'gatsby-link';
import './navigation.css';

const Naviagation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about/">About Page</Link></li>
      </ul>
    </nav>
  )
};

export default Naviagation