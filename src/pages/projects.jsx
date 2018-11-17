import React from 'react';
import ProjectsService from '../services/projects/projects-service';
import CardList from '../components/card-list/card-list';

class ProjectsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: new ProjectsService().getModeledProjects()
    };
  }

  render() {
    return (
      <div>
        <p className="sub-heading">These are a few projects that I think reflect some of my general interests and activities.</p>
        
        <div className="projects">
          <CardList items={this.state.projects}/>
        </div>

      </div>
    );
  }
}

export default ProjectsPage;