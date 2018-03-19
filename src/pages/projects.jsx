import React from 'react';
import Link from 'gatsby-link';
import PresentationsService from '../services/presentations-service';
import ProjectsService from '../services/projects-service';
import SocialLinksService from '../services/social-links-service';
import Card from '../components/card/card';
import PageWrapper from '../layouts/page-layout';

export class ProjectsPage extends React.Component {
  constructor() {
    super();

    this.projects = new ProjectsService().getProjects();
  }

  render() {
    return (
      <PageWrapper>
        <p>Here are a few projects that I think reflect my interests / activities.</p>

        {
          this.projects.map(project => {
            let key = 0;
            let item = {
              title: project.name,
              abstract: project.description,
              link: project.link
            }
            return <Card key={item.title} item={item}/>
          })
        }

      </PageWrapper>
    )
  }
};

export default ProjectsPage;