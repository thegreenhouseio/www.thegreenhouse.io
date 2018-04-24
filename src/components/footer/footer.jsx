import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from 'react-social-icons';
import './footer.css';

const Footer = (props) => {

  return (
    <footer className="footer">
      <hr/>
      <SocialIcons urls={props.links}/>
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