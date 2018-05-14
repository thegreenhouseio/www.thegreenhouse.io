import React from 'react';
import Link from 'gatsby-link';
import './blog.css';

class BlogPage extends React.Component {
  
  constructor() {
    super();
  }

  render() {

    return (
      <div id="blog">

        <h2><u>2018</u></h2>
        
        <ul className="blog-posts-list">
          <li><Link to="/blog/2018/05/15">A Case Study in Performance (cont.) 📝</Link></li>
          <li><Link to="/blog/2018/01/24">A Case Study in Performance 📝</Link></li>
        </ul>

        <hr/>

        <h2><u>2017</u></h2>
        
        <ul className="blog-posts-list">
          <li><Link to="/blog/2017/10/15">Publishing My First Docker Image 📝</Link></li>
          <li><Link to="/blog/2017/09/10">New OSS Project - Vue Webapp Seed 💡</Link></li>
          <li><Link to="/blog/2017/06/07">New OSS Project - PHP API Seed 💡</Link></li>
          <li><Link to="/blog/2017/05/05">GitHub Dashboard 1.2 Released 🎉</Link></li>
          <li><Link to="/blog/2017/04/22">GitHub Dashboard 1.1 Released 🎉</Link></li>
          <li><Link to="/blog/2017/04/10">GitHub Dashboard 1.0 Released 🎉</Link></li>
          <li><Link to="/blog/2017/03/30">Teaching An Old Dog New Tricks! 📝</Link></li>
          <li><Link to="/blog/2017/03/26">Minecraft In The Cloud 📝</Link></li>
        </ul>
      </div>
    );
  }
}

export default BlogPage;