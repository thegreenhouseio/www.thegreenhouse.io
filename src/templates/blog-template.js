import { html, LitElement } from 'lit-element';

import '../components/blog-post/blog-post';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;
METAIMPORT;
METADATA;

class BlogTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      METAELEMENT

      <style>
        ${ pageCss }

        p {
          width: 60%;
          margin: 10px auto;
          padding: 10px;
        }

        img {
          display: block;
          width: 70%;
          margin: 0 auto;
        }

        ul {
          list-style-type: none;
          width: 70%;
          margin: 0 auto;
          padding: 0;
          text-align: center;
        }

        li {
          margin: 10px 0;
        }

        h2 {
          text-decoration: underline;
          margin: 10px auto;
          width: 20%;
          text-align: center;
        }

        ul a {
          text-decoration: none!important;
        }

        pre {
          width: 400px;
          display: block;
          margin: 0 auto;
          text-align: left;
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
        </section>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}

customElements.define('page-template', BlogTemplate);