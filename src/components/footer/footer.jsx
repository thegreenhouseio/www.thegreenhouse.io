import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

const Footer = (props) => {

  return (
    <footer className="footer">
      <hr/>
      {
        props.links.map((link, idx) => {
          return <SocialIcon key={idx} url={link}/>;
        })
      }
      <br/>
      <span className="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
    </footer>
  );

};

Footer.propTypes = {
  links: PropTypes.array
};

Footer.defaultProps = {
  links: []
};

export default Footer;