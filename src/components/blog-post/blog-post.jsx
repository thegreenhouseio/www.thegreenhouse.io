import React from 'react';
import PropTypes from 'prop-types';
import './blog-post.css';

const BlogPost = (props) => {

  const headerBackgroundStyle = {
    backgroundImage: `url('${props.image}')`
  };

  return (
    <div className="blog-post">

      <div className="header" style={headerBackgroundStyle}>
        <h1>{props.title}</h1>
        <h5>Published: {props.date}</h5>
      </div>

      <div className="post">
        { props.children }
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