import React from "react";
import SocialIcons from 'react-social-icons';
import SocialLinksService from '../../services/social-links-service';
import './footer.css';

class Footer extends React.Component {
  
  constructor() {
    super();
    const links = new SocialLinksService().getLinks();
    
    this.urls = links.map(link => {
      return link.url;
    });
  }

  render() {
    return (
      <footer>
        <SocialIcons urls={this.urls} />
      </footer>
    )
  }
};

export default Footer;