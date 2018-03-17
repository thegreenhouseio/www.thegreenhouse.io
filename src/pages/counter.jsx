import React from 'react';
import Link from 'gatsby-link';
import Counter from '../components/counter';

export default () => {
  return (
    <div>
      <Counter/>
      <Link to="/">back home</Link>
    </div>
  )
}