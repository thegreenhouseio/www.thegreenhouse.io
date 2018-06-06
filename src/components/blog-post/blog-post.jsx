import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './blog-post.css';

export function slugifyDate(date) {
  const dateArray = date.split('.');

  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}/`;
}

/*
 * 
 * Notes for social sharing:
 * - <meta> data intentionally set to reference production
 * - `props.date` needs to match the folder path of the blog post
 * 
 */
const BlogPost = (props) => {
  const isRemoteUrl = props.image.includes('http');
  const canonicalUrl = `https://www.thegreenhouse.io/blog/${slugifyDate(props.date)}`;
  const canonicalImageUrl = isRemoteUrl ? props.image : `https://s3.amazonaws.com/www.thegreenhouse.io${props.image}`;
  
  const headerBackgroundStyle = {
    backgroundImage: `url('${props.image}')`
  };

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="The Greenhouse I/O - Blog" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl}/>
        <meta property="og:image" content={canonicalImageUrl} />
        <meta property="og:description" content={props.title} />
      </Helmet>

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