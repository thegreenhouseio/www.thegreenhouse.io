import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Typography from 'typography';
import SocialLinksService from '../services/social-links/social-links-service';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import './index.css';

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
class Layout extends React.Component {
  
  constructor() {
    super();
    
    this.links = new SocialLinksService().getLinksAsArray();
  }

  render() {
    return (
      <div className='layout'>
        { /* TODO would be nice to not need a dependency for this */} 
        <Helmet>
          <title>The Greenhouse I/O</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta name='mobile-web-app-capable' content='yes'/>
          <meta name='apple-mobile-web-app-capable' content='yes'/>
          <meta name='apple-mobile-web-app-status-bar-style' content='black'/>
          <meta name="description" content="Personal site, blog, and home base for Owen Buckley and The Greenhouse I/O"/>
        </Helmet>
 
        <section className='row'>
          <Header/>
        </section>

        <section className='row'>
          <Navigation/>
        </section>

        <section className='outlet row'>
          { this.props.children() }
        </section>

        <section className='row'>
          <Footer links={this.links}/>
        </section>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;