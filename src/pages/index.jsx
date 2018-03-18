import React from 'react';
import Link from 'gatsby-link';
import Typography from 'typography';
import HomePage from './home';
import './app.css';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  baseFontFamily: ['Avenir Next', 'Helvetica Neue']
})

export default () => {
  return (
    <HomePage/>
  )
};