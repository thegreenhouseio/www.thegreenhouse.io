import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Typography from 'typography';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import './index.css';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Avenir Next", "serif"],
});

typography.injectStyles();

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        { /* TODO would be nice to need a dependency for this */} 
        <Helmet title="The Greenhouse I/O"/>

        <section>
          <Header/>
        </section>

        <section>
          <Navigation/>
        </section>

        <section className="outlet">
          { this.props.children() }
        </section>

        <section>
          <Footer/>
        </section>
      </div>
    )
  }
}

export default Layout;