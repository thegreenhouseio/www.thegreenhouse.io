import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/angular-shield.jpg';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BlogPost title='Teaching An Old Dog New Tricks!' date='03.30.2017' image={bannerImage}>
        <div>
          <p>Since not all existing AngularJS (1.x) projects can jump into using Angular (2+) and <i>ng-upgrade</i> may not 
            be a feasible option for some, I created <OutboundLink href="https://github.com/thegreenhouseio/angularjs-webpack-seed" target="_blank" rel="noopener noreferrer">a seed repo in GitHub to 
            demonstrate AngularJS working with webpack and ES2015+ syntax.</OutboundLink></p>

          <p>To me, ES2015+ syntax, in particular the introduction of modules (<i>import / export</i>) has ushered in a new 
            era of writing JavaScript applications, including our good friend AngularJS.</p>
            
          <p>By adopting ES2015+ syntax and following meaningful styleguide conventions like John Papa&apos;s, these effort can really go a long way to improving the readability and 
            organization of an existing AngularJS app.  Plus, if you can slowly migrate through the releases of AngularJS &gt; 1.5, you can 
            set yourself up for a migration path to Angular now.</p>

          <p>This seed is not meant to be comprehensive, but just as a way to show that any existing AngularJS app can benefit from an 
              ES2015+ upgrade, backed by webpack.</p>

          <p>Hope to hear your thoughts and feedback!</p>
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;