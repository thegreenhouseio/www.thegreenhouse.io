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

        h2 {
          text-decoration: underline;
          margin: 10px auto;
          width: 20%;
          text-align: center;
        }

        ul a {
          text-decoration: none!important;
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

// blog posts
// - [Building A Better Mouse Trap 🧀](/blog/2018/10/28)
// - [ContribCreate Evergeen App ♻️utary](/blog/2018/09/26)
// - [Project Evergreen 💡](/blog/2018/06/06)
// - [A Case Study in Performance (cont.) 📝](/blog/2018/05/16)
// - [A Case Study in Performance 📝](/blog/2018/01/24)
// ## _2017_
// - [Publishing My First Docker Image 📝](/blog/2017/10/15)
// - [New OSS Project - Vue Webapp Seed 💡](/blog/2017/09/10)
// - [New OSS Project - PHP API Seed 💡](/blog/2017/06/07)
// - [GitHub Dashboard 1.2 Released 🎉](/blog/2017/05/05)
// - [GitHub Dashboard 1.1 Released 🎉](/blog/2017/04/22)
// - [GitHub Dashboard 1.0 Released 🎉](/blog/2017/04/10)
// - [Teaching An Old Dog New Tricks! 📝](/blog/2017/03/30)
// - [Minecraft In The Cloud 📝](/blog/2017/03/26)