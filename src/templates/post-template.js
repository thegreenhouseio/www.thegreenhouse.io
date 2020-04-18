import { html, LitElement } from 'lit-element';

import '../components/blog-post/blog-post';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;

// TODO
// 1. ~~wire up post to new template, mock data~~
// 2. pull in real data
// 3. fiX CSS
// 4. upgrade all pages
// 5. remove app-blog-post from blog-template, unused CSS
// 6. Other PR, pull in ToC from data?
class BlogTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
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
          <app-blog-post 
            title='Git Explorer' 
            date='04.07.2020' 
            image="/assets/blog-post-images/git.png">
            
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

customElements.define('page-template', BlogTemplate);