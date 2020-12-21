import { css, html, LitElement } from 'lit-element';
// TODO import client from '@greenwood/cli/data/client';
// import GraphQuery from '../queries/graph';
import '../components/blog-post/blog-post.js';

class PostTemplate extends LitElement {

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
  
  static get properties() {
    return {
      post: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
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
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    let route = window.location.pathname;
    const data = await fetch('/graph.json')
      .then(resp => resp.json());
    // const response = await client.query({
    //   query: GraphQuery
    // });
    // this.post = response.data.graph.filter((page) => {
    //   return page.link.lastIndexOf(route) >= 0;
    // })[0];

    if (route.lastIndexOf('/') !== route.length - 1) {
      route = `${route}/`;
    }

    this.post = data
      .filter((page) => {
        return page.route.lastIndexOf(route) >= 0;
      })[0];

    // console.debug(this.post);
    // console.table(this.post);
  }

  render() {
    const { title } = this.post;
    const { date, image } = this.post.data;

    return html`
      <div>

        <app-blog-post 
          title="${title}"
          date="${date}"
          image="${image}">
        
          <content-outlet></content-outlet>
        
        </app-blog-post>

      </div>
    `;
  }
}

customElements.define('app-page-post', PostTemplate);