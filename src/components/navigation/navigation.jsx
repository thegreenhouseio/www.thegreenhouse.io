import React from 'react';
import { Link } from 'gatsby';
import './navigation.css';

const Naviagation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/about/" id="link-about">About</Link></li>
          <li><Link to="/projects/" id="link-projects">Projects</Link></li>
          <li><Link to="/blog/" id="link-blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Naviagation;