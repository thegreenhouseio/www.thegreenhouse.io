class FooterComponent extends HTMLElement {
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
        footer a {
          margin: 10px 10px;
        }
        
        footer .copyright {
          display: inline-block;
          margin: 20px auto 10px;
        }
      </style>

      <footer className="footer">
        <!-- Social Icons --> 
        <br/>
        <span className="copyright">&copy; Owen Buckley / thegreenhouse.io</span>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);