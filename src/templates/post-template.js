import { html, LitElement } from 'lit-element';
import client from '@greenwood/cli/data/client';
import gql from 'graphql-tag';

import '../components/blog-post/blog-post';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;

class PostTemplate extends LitElement {

  static get properties() {
    return {
      post: {
        type: Object
      }
    };
  }

  constructor() {
    super();

    this.post = {
      title: '',
      data: {
        date: '',
        image: ''
      }
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    let route = window.location.pathname;
    const response = await client.query({
      query: gql`query {
        graph {
          title,
          link,
          data {
            date,
            image
          }
        }
      }`
    });

    if (route.lastIndexOf('/') !== route.length - 1) {
      route = `${route}/`;
    }

    this.post = response.data.graph.filter((page) => {
      return page.link.lastIndexOf(route) >= 0;
    })[0];
  }

  render() {
    const { title } = this.post;
    const { date, image } = this.post.data;

    return html`
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
          
          <app-blog-post 
            title="${title}"
            date="${date}"
            image="${image}">
          
            <entry></entry>
          
          </app-blog-post>

        </section>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}

customElements.define('page-template', PostTemplate);