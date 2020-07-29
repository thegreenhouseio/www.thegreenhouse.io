import { html, css, LitElement, unsafeCSS } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import '../components/navigation/navigation';
import pageCss from '../styles/page.css';

class AppComponent extends LitElement {

  static get styles() {
    return css`
      ${unsafeCSS(pageCss)}

      .gwd-content-outlet {
        min-height: 100vh
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
          <routes></routes>
        </section>
        <lit-route><h1>404 Not found</h1></lit-route>

        <section class="row">
          <app-footer></app-footer>
        </section>
      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);