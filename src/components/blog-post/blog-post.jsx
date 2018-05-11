import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';
import './blog-post.css';

const BlogPost = (props) => {

  const headerBackgroundStyle = {
    backgroundImage: `url('${props.image}')`
  };

  // TODO how will this dynamic content work???
  return (
    <div>
      {/* <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.thegreenhouse.io/XXXX" />
        <meta property="og:image" content="${props.image}" />
        <meta property="og:description" content="${props.title}" />

        <meta name="twitter:card" content="${props.title}" />
      </Helmet> */}

      <div className="blog-post">

        <div className="header" style={headerBackgroundStyle}>
          <h1 className="title">{props.title}</h1>
          <h5 className="date">Published: {props.date}</h5>
        </div>

        <div className="content">
          { props.children }
        </div>
      
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, 
  image: PropTypes.string.isRequired
};

export default BlogPost;