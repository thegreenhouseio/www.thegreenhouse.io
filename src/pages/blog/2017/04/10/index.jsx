import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/github.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='GitHub Dashboard 1.0 Released! 🎉' date='04.10.2017' image={bannerImage}>
        <div>
          <p>The Greenhouse is happy to announce the 1.0.0 release of GitHub Dashboard!  Since the last RC, the focus was on unit testing, 
          getting code coverage up (now at 93%!), and eliminating technical debt.  For more information, please review the 
          <OutboundLink href="https://github.com/thescientist13/github-dashboard/releases/tag/1.0.0" target="_blank" rel="noopener"> release notes.</OutboundLink></p>

          <p>You can see what upcoming features are being planned next in the <OutboundLink href="https://github.com/thescientist13/github-dashboard/projects/4" target="_blank" rel="noopener">Project tracker.</OutboundLink></p>

          <p>Please feel free to leave thoughts and feedback, bug reports, or feature requests by using the 
            <OutboundLink href="https://github.com/thescientist13/github-dashboard/issues" target="_blank" rel="noopener"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;