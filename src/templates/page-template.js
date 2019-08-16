import { html, LitElement } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import pageCss from '../styles/page.css';
import '../styles/theme.css';

MDIMPORT;
METAIMPORT;
METADATA;

class PageTemplate extends LitElement {
  render() {
    return html`
      METAELEMENT

      <style>
        ${pageCss}

        p {
          width: 65%;
          margin: 20px auto;
          text-align: left;
          font-size: 20px;
        }

        p.cta {
          text-align: center;
        }

        hr {
          width: 15%;
          margin: 5px auto;
        }
      </style>

      <div class="layout">
        <section class="row">
          <app-header></app-header>
        </section>
        
        <!--
        <section className='row'>
          <Navigation/>
        </section>
        -->

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

customElements.define('page-template', PageTemplate);