import React from 'react';
// import PropTypes from 'prop-types';
// import { SocialIcon } from 'react-social-icons';
import './footer.css';

// constructor() {
//   super();
  
//   // TODO move this to footer component, shared services at the component level are fine
//   this.links = new SocialLinksService().getLinksAsArray();
// }

const Footer = () => {

  return (
    <footer className="footer">
      <hr/>
      {
        // props.links.map((link, idx) => {
        //   return <SocialIcon key={idx} url={link}/>;
        // })
      }
      <br/>
      <span className="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
    </footer>
  );

};

// Footer.propTypes = {
//   links: PropTypes.array
// };

// Footer.defaultProps = {
//   links: []
// };

export default Footer;