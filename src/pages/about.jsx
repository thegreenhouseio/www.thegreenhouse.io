import React from 'react';
import Link from 'gatsby-link';
import ArticlesService from '../services/articles-service';
import PresentationsService from '../services/presentations-service';
import SocialLinksService from '../services/social-links-service';
import Card from '../components/card/card';

class PublicationsPage extends React.Component {
  constructor() {
    super();

    this.socialLinksMap = new SocialLinksService().getLinks(true);
    this.articles = new ArticlesService().getArticles();
    this.presentations = new PresentationsService().getPresentations();
  }

  render() {
    return (
      <div>
        <p className="sub-heading">I think the best way to tell you about myself is to show you what I am passionate about.  Below are some featured articles
          and presentations I've worked on.</p>

        <div>
          <h2><u>Speaking</u></h2>
          {
            this.presentations.map(presentation => {
              let key = 0;
              let item = {
                title: presentation.title,
                abstract: presentation.abstract,
                link: presentation.link,
                date: presentation.date,
                video: presentation.video
              }
              return <Card key={item.title} item={item}/>
            })
          }
        </div>

        <div>
          <h2><u>Writing</u></h2>
          {
            this.articles.map(article => {
              let key = 0;
              let subHeading = article.subHeading ? `: ${article.subHeading}` : '';
              let item = {
                title: `${article.heading} ${subHeading}`,
                abstract: article.abstract,
                link: article.link,
                img: article.img,
                date: article.date
              }
              return <Card key={item.title} item={item}/>
            })
          }

          <span>Please feel free to visit my <a href={this.socialLinksMap.medium}>Medium</a> page for other articles I've done!</span>
        </div>
      
      </div>
    )
  }
};

export default PublicationsPage;