import React from 'react';
import Link from 'gatsby-link';

export default () => {
  return (
    <div style={{ color: 'red' }}>
      <h1>Hello World!</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    
      <br/>

      <div>
        <Link to="/page-2/">Page 2</Link>
      </div>


      <div>
        <Link to="/counter/">Counter</Link>
      </div>

      <h1>Post PR test to see if it works from Jenkins thumbsup 👍</h1>
    </div>

  )
};