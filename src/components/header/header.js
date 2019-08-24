import { css, html, LitElement } from 'lit-element';

class HeaderComponent extends LitElement {
  
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host .header {
        width: 100%;
      }
      
      :host header {
        display: none;
      }
      
      :host .caption {
        width: 100%;
        text-align: center;
        color: #efefef;
        background-color: #020202;
        font-style: italic;
        margin: 0;
      }
      
      @media (min-width: 768px) {
        :host header {
          display: block;
          background-image: url('/assets/banner.jpg');
          background-size: cover;
          background-color: #020202;
          height: 300px;
        }
      }
    `;
  } 

  render() {
    return html`
      <div class="header"> 
        <a href="https://www.greenwoodjs.io/">
          <header></header>
          <h2 class="caption">A DREAMER BY DESIGN</h2>
        </a>
      </div>
    `;
  }
}

customElements.define('app-header', HeaderComponent);