import headerCss from './header.css';

class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
  }

  // run some code when the component is ready
  connectedCallback() {
    this.root.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    return `
      <style>
        ${headerCss}
      </style>

      <div className="header"> 
        <Link to="/">
          <header></header>
          <h2 className="caption">A DREAMER BY DESIGN</h2>
        </Link>
      </div>
    `;
  }
}

customElements.define('app-header', HeaderComponent);