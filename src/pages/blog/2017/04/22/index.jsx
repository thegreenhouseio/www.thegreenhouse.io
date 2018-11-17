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
      <BlogPost title='GitHub Dashboard 1.1.0 Released' date='04.22.2017' image={bannerImage}>
        <div>
          <p>The Greenhouse is pleased to announce <OutboundLink href="https://github.com/thescientist13/github-dashboard/releases/tag/1.1.0" target="_blank" rel="noopener">a new release of GitHub Dashboard</OutboundLink>! 
          Now with the ability to filter displayed repositories by name.  This is a much more efficient way to navigate your list of repositories!</p> 

          <p>On a side note, our <OutboundLink href="https://github.com/thescientist13/github-dashboard/issues/104" target="_blank" rel="noopener">feature for highlighting a 
          repository row when the user is a requested reviewer on a pull request</OutboundLink> is being reconsidered in light of the
          <OutboundLink href="https://developer.github.com/v3/pulls/reviews/" target="_blank" rel="noopener"> GitHub Reviews API</OutboundLink> still being in development.</p>

          <p>Please feel free to leave thoughts and feedback, bug reports, or feature requests by using the 
            <OutboundLink href="https://github.com/thescientist13/github-dashboard/issues" target="_blank" rel="noopener"> issue tracker.</OutboundLink></p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;