import { html, LitElement } from 'lit-element';

import '../components/card-list/card-list';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import ProjectsService from '../services/projects/projects-service';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;

class ProjectsTemplate extends LitElement {

  static get properties() {
    return {
      project: {
        type: Array
      }
    };
  }

  constructor() {
    super();

    this.projects = new ProjectsService().getModeledProjects();
  }

  render() {
    const { projects } = this;

    return html`
      <style>
        ${ pageCss }

        p {
          text-align: center;
          width: 50%;
          margin: 20px auto;
          font-size: 1.1em;
        }
      </style>

      <div class="layout">
        <section class="row">
          <app-header></app-header>
        </section>
        
        <section class='row'>
          <app-navigation></app-navigation>
        </section>

        <section class="outlet row">  
          <entry></entry>

          <div class="projects">
            <app-card-list .items=${projects}></app-card-list>
          </div>
        </section>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}

customElements.define('page-template', ProjectsTemplate);