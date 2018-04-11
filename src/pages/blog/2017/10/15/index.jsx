import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/docker.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='Publishing My First Docker Image' date='10.15.2017' image={bannerImage}>
        <div>
          <p>Just wanted to <OutboundLink href="https://medium.com/@thegreenhouseio/publishing-my-first-docker-image-a12d65b59903">share an article</OutboundLink> I wrote 
            about publishing my first Docker image as a fun exercise and learning experience.</p>

          <p>Please feel free to leave thoughts and feedback on the article or bug reports and feature requests by using the 
            <OutboundLink href="https://github.com/thegreenhouseio/docker-nodejs-dev"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;