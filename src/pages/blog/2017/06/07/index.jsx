import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/php.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='PHP API Seed' date='06.07.2017' image={bannerImage}>
        <div>
          <p>Just wanted to share a new OSS project I just put out over the weekend; <OutboundLink href="https://github.com/thegreenhouseio/php-api-seed">php-api-seed</OutboundLink>.  
            It&apos;s a RESTful API backend written in PHP that powers some of my personal sites, like <OutboundLink href="https://www.analogstudios.net">Analog Studios.</OutboundLink>  
            It uses Slim as the micro-framework, JWT for authentication, and can be deployed as a phar.</p>

          <p>It definitely has some room for some refactoring improvements, and I&apos;m always open to feedback, in particular around security.</p>
           
          <p>Please feel free to leave thoughts and feedback, bug reports, or feature requests by using the 
            <OutboundLink href="https://github.com/thegreenhouseio/php-api-seed/issues"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;