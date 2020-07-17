import { css, html, LitElement, unsafeCSS } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;

class BlogTemplate extends LitElement {

  static get styles() {
    return css`
      ${ unsafeCSS(pageCss) }

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
    `;
  }

  render() {
    return html`

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