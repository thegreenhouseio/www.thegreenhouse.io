import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typography from 'typography';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import SocialLinksService from '../../services/social-links/social-links-service';
import './layout.css';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['Avenir Next', 'serif']
});

typography.injectStyles();

// TODO fix why bombs out because of <Link> being used in the component
// https://github.com/thegreenhouseio/www.thegreenhouse.io/issues/34
class Layout extends React.Component {

  constructor() {
    super();

    this.links = new SocialLinksService().getLinksAsArray();
  }

  render() {
    
    return (
      <div className='layout'>
        <Helmet>
          <title>The Greenhouse I/O</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta name='mobile-web-app-capable' content='yes'/>
          <meta name='apple-mobile-web-app-capable' content='yes'/>
          <meta name='apple-mobile-web-app-status-bar-style' content='black'/>
          <meta name="description" content="Personal site and blog for Owen Buckley and The Greenhouse I/O"/>
        
          <meta property="og:title" content="The Greenhouse I/O" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.thegreenhouse.io/" />
          <meta property="og:image" content="https://s3.amazonaws.com/www.thegreenhouse.io/static/banner.4b3f4ebd.jpg" />
          <meta property="og:description" content="Personal site and blog for Owen Buckley and The Greenhouse I/O.  Ideas are built here." />

          <meta name="twitter:site" content="@thegreenhouseio" />
          <meta name="twitter:creator" content="@thegreenhouseio" />

          <html lang="en" prefix="og:http://ogp.me/ns#"/>
        </Helmet>

        <section className='row'>
          <Header/>
        </section>

        <section className='row'>
          <Navigation/>
        </section>

        <section className='outlet row'>
          <div>{ this.props.children }</div>
        </section>

        <section className='row'>
          <Footer links={this.links}/>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;