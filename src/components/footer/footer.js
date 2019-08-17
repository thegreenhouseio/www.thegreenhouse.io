import { html, LitElement } from 'lit-element';
import '../social-icon-link/social-icon-link';

class FooterComponent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        footer {
          width: 50%;
          margin: 0 auto;
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 10px;
        }

        li {
          display: inline-block;
        }
        
        .copyright {
          display: inline-block;
          margin: 10px auto;
        }
      </style>

      <footer>
        <ul>
          <li>
            <app-social-icon-link name="linkedin"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="twitter"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="medium"></app-social-icon-link>
          </li>

          <li>
            <app-social-icon-link name="github"></app-social-icon-link>
          </li>
        <ul>
        
        <span class="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);