import React from 'react';
import PropTypes from 'prop-types';
import './blog-post.css';

const BlogPost = (props) => {

  const headerBackgroundStyle = {
    backgroundImage: `url('${props.image}')`
  };

  // TODO how will this work for dynamic <meta> content???
  return (
    <div>

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