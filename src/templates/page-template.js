import { html, LitElement } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import '../styles/theme.css';

MDIMPORT;
METAIMPORT;
METADATA;

class PageTemplate extends LitElement {
  render() {
    return html`
      METAELEMENT
   
      <section className='row'>
        <app-header></app-header>
      </section>
      
      <!--
      <section className='row'>
        <Navigation/>
      </section>
      -->

      <section className='outlet row'>
        <entry></entry>
      </section>

      <section className='row'>
        <app-footer></app-footer>
      </section>
    `;
  }
}

customElements.define('page-template', PageTemplate);