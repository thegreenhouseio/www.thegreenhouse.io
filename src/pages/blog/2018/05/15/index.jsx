import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BlogPost from '../../../../../components/blog-post/blog-post';
import bannerImage from '../../../images/pwa-lighthouse.png';

class BlogPostPage extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <BlogPost title='A Case Study in Performance (cont)' date='05.15.2018' image={bannerImage}>
        <div>
          <p>I&apos;m <b>super</b> excited to announce the next installment of my ongoing article series detailing performance and web applications! </p>
            
          <p>In this latest installement, I continue the learning process of incrementaly improving the performance metrics of 
            the <OutboundLink href="https://github.com/ProvidenceGeeks/website-frontend/issues" target="_blank" rel="noopener">Providence Geeks website</OutboundLink> and 
            discuss the steps taken and gains achieved by:</p>
            
          <ul>
            <li><u>Upgrading to webpack 4</u></li>
            <li><u>Implementing route based code splitting + lazy loading</u></li>
            <li><u>Improving header image loading</u></li>
          </ul>

          <p>I always welcome feedback! Please feel free to leave comments on the article, reach out to me on twitter, or visit the 
            project&apos;s <OutboundLink href="https://github.com/ProvidenceGeeks/website-frontend/issues" target="_blank" rel="noopener">issue tracker</OutboundLink> and 
            provide any bug reports and / or feature requests. ⭐</p>

          <p><b>Also</b>, I was honored to speak recently at <OutboundLink href="https://www.meetup.com/Prov-JS/events/249132270/" target="_blank" rel="noopener">ProvJS </OutboundLink>
            to discuss web performance and have made my slides 
            available <OutboundLink href="https://docs.google.com/presentation/d/111An87jpLHBLAM1EMaTu9DlIcWKy6ekyyu4dqqogXso/edit?usp=sharing" target="_blank" rel="noopener">here.</OutboundLink></p>
        
        </div>
      </BlogPost>
    );
  }
}

export default BlogPostPage;