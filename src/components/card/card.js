import { css, html, LitElement, unsafeCSS } from 'lit-element';
import '../social-icon-link/social-icon-link.js';
import cardCss from './card.css?type=css';

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

  static get styles() {
    return css`
      ${ unsafeCSS(cardCss) }
    `;
  } 

  render() {
    const { item } = this;
    const link = item && item.link ? item.link : '';
    const title = item && item.title ? item.title : '';
    const abstract = item && item.abstract ? item.abstract : '';
    const date = item && item.date 
      ? html`<span class="card-date"><b>Date: ${item.date}</b></span>`
      : ''; 
    const slides = item && item.slides 
      ? html`<a href=${item.slides} target="_blank" class="card-slides">📎 (slides)</a>`
      : ''; 
    const img = item && item.img 
      ? html`<img class="card-image" src="${item.img}" alt="${title}" loading="lazy"/>`
      : ''; 
    const video = item && item.video
      ? html`<iframe class="card-video" width="100%" height="315" src="${item.video}" frameBorder="0" allowFullScreen loading="lazy"></iframe>`
      : '';

    return html`
      <div class="card">
    
        <div class="wrapper">    
          <div class="card-header-icon">
            <app-social-icon-link
              .link="${link}"
            ></app-social-icon-link>
          </div>

          <div class="card-header">
            
            <h3 class="card-header-heading">
              <a class="card-header-heading-link" target="_blank" rel="noopener" click="getOutboundLink('${link}');" href="${link}">${title}</a>
            </h3>

            <span class="date">${ date }</span>
            <span class="slides">${ slides }</span>
          </div>

          <div class="card-content">
            <article>${abstract}</article>
          </div>
          
          <div class="card-footer">
            <span class="image">${ img }</span>
            <span class="video">${ video }</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-card', CardComponent);