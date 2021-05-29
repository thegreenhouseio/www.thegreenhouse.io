import { css, html, LitElement } from 'lit-element';
import '../components/card-list/card-list.js';
import ProjectsService from '../services/projects/projects-service.js';

class ProjectsListComponent extends LitElement {

  constructor() {
    super();

    this.projects = new ProjectsService().getModeledProjects();
  }
  
  static get properties() {
    return {
      project: {
        type: Array
      }
    };
  }

  static get styles() {
    return css`
      p {
        text-align: center;
        width: 50%;
        margin: 20px auto;
        font-size: 1.1em;
      }
    `;
  }

  render() {
    const { projects } = this;

    return html`
      <div>
        <div class="projects">
          <app-card-list .items=${projects}></app-card-list>
        </div>
      </div>
    `;
  }
}

customElements.define('app-projects-list', ProjectsListComponent);