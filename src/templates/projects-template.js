import { css, html, LitElement } from 'lit-element';
import '../components/card-list/card-list';
import ProjectsService from '../services/projects/projects-service';
import '../styles/theme.css';

class ProjectsTemplate extends LitElement {

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
        <entry></entry>

        <div class="projects">
          <app-card-list .items=${projects}></app-card-list>
        </div>
      </div>
    `;
  }
}

customElements.define('page-template', ProjectsTemplate);