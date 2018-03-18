import React from "react";
import SocialIcons from 'react-social-icons';
import './footer.css';

const Footer = () => {
  const urls = [
    'https://www.linkedin.com/in/owen-buckley-91393447/',
    'https://twitter.com/thegreenhouseio',
    'https://medium.com/@thegreenhouseio',
    'https://github.com/thegreenhouseio'
  ];

  return (
    <footer>
      <SocialIcons urls={urls} />
    </footer>
  )
};

export default Footer;