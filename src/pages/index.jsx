import React from 'react';
import Link from 'gatsby-link';
import Typography from 'typography';
import HomePage from './home';
import './app.css';

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

export default () => {
  return (
    <HomePage/>
  )
};