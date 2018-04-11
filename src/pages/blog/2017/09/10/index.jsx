import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/vue.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='PHP API Seed' date='06.07.2017' image={bannerImage}>
        <div>
          <p>Hey everyone, just wanted to share a new Open Source project I put together. 
            It&apos;s <OutboundLink href="https://github.com/thegreenhouseio/vue-webapp-seed">a starter repository</OutboundLink> using the 
            JavaScript framework <OutboundLink href="https://vuejs.org/">Vue</OutboundLink>!</p>

          <p>My main motivation was to get a feel for the approach and philosophy taken by the project maintainers, in particular the claimed simplicity of getting started, 
            advocating for the usage of <OutboundLink href="https://vuejs.org/v2/guide/single-file-components.html">Single File Components</OutboundLink> and eschewing the 
            use of <i>class</i> based UI components by default, <OutboundLink href="https://github.com/vuejs/vue/issues/2371">in favor of fully embracing the Prototype</OutboundLink> in 
            all its glory.   (I can certainly respect standing on sound principals!)  <OutboundLink href="https://medium.com/@thegreenhouseio/eyes-on-vue-7ee4fe808364">Read more in my 
            medium.com article</OutboundLink> and please feel free to check out <OutboundLink href="https://github.com/thegreenhouseio/vue-webapp-seed">the repo</OutboundLink>!
          </p>
    
          <p>Please feel free to leave thoughts and feedback, bug reports, or feature requests by using the 
            <OutboundLink href="https://github.com/thegreenhouseio/php-api-seed/issues"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;