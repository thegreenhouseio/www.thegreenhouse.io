import { html, LitElement } from 'lit-element';

import cardCss from './card.css';

class CardComponent extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      item: {
        type: Object
      }
    };
  }

  render() {
    const { item } = this;
    const date = item.date 
      ? html`<span class="card-date"><b>Date: ${item.date}</b></span>`
      : ''; 
    const slides = item.slides 
      ? html`<a href=${item.slides} target="_blank" class="card-slides">📎 (slides)</a>`
      : ''; 
    const img = item.img 
      ? html`<img className="card-image" src="${item.img}"/>`
      : ''; 
    const video = item.video
      ? html`<iframe className="card-video" width="100%" height="315" src="${item.video}" frameBorder="0" allowFullScreen/>`
      : '';

    return html`
      <style>
        ${ cardCss }
      </style>

      <div class="card">
    
        <div class="wrapper">    
          <div class="card-header-icon">
            <!-- <SocialIcon url={props.item.link}/> -->
          </div>

          <div class="card-header">
            
            <h3 class="card-header-heading">
              <a class="card-header-heading-link" target="_blank" href="${item.link}">${item.title}</a>
            </h3>

            ${ date }
            ${ slides }
          </div>

          <div class="card-content">
            <article>${item.abstract}</article>
          </div>
          
          <div class="card-footer">
            ${ img }
            ${ video }
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-card', CardComponent);