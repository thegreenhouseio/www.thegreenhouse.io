import React from 'react';
import ArticlesService from '../services/articles/articles-service';
import PresentationsService from '../services/presentations/presentations-service';
import SocialLinksService from '../services/social-links/social-links-service';
import CardList from '../components/card-list/card-list';

class PublicationsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      socialLinksMap: new SocialLinksService().getLinks(true),
      articles: new ArticlesService().getModeledArticles(),
      presentations: new PresentationsService().getModeledPresentations()
    };
  }

  render() {
    return (
      <div className="about">
        <p className="sub-heading">I think the best way to tell you about myself is to show you what I am passionate about.  Below are some featured articles
          and presentations I've worked on.</p>

        <div className="speaking">
          <h2><u>Speaking</u></h2>

          <CardList items={this.state.presentations}/>
        </div>

        <div className="writing">
          <h2><u>Writing</u></h2>

          <CardList items={this.state.articles}/>

          <span>Please feel free to visit my <a target="_blank" href={this.state.socialLinksMap.medium}>Medium</a> page for other articles I've done!</span>
        </div>
      
      </div>
    );
  }
}

export default PublicationsPage;