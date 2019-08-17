import { html, LitElement } from 'lit-element';

import '../card/card';

class CardListComponent extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      items: {
        type: Array
      }
    };
  }

  render() {
    let { items } = this;

    if (!items) {
      items = [];
    }

    const cards = items.map((item) => {
      return html`<app-card .item="${item}"></app-card>`;
    });

    return html`
      ${cards}
    `;
  }

}

customElements.define('app-card-list', CardListComponent);