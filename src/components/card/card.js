import { css, html, LitElement } from 'lit-element';

import '../social-icon-link/social-icon-link';

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
      :host .card {
        width: 70%;
        margin: 0 auto 35px;
        max-width: 1024px;
        min-width: 320px;
        border: 2px solid #020202;
        border-radius: 5px;
        padding: 10px;
      }
      
      :host .wrapper {
        display: grid;
        grid-template-columns: repeat(12, [col-start] 1fr);
        grid-gap: 20px;
      }
      
      :host .wrapper > * {
        grid-column: col-start / span 12;
      }
      
      :host .card-header, :host .card-content {
        text-align: left;
      }
      
      :host .card-slides {
        margin-left: 20px;
        text-decoration: none;
        color: #020202;
      }
      
      :host .card-footer img {
        width: 100%;
      }
      
      @media (min-width: 500px) {
        :host .card-header-icon {
          display: none;
        }
      
        :host .card {
          border: none;
        }
      }
      
      @media (min-width: 300px) {
        :host .card-header-icon {
          display: none;
        }
      
        :host .card {
          border: none;
        }
      }
      
      @media (min-width: 700px) {
        :host .card {
          border: 2px solid #020202;
        }
        
        :host .card-header-icon {
          display: inline;
          grid-column: col-start / span 2;
          grid-row: 1 / 6;  /* autoprefixer: off */
        }
      
        :host .card-header {
          grid-column: col-start 3 / span 10;
          grid-row: 1 / 6; /* autoprefixer: off */
        }
      }
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
      ? html`<img class="card-image" src="${item.img}" alt="${title}"/>`
      : ''; 
    const video = item && item.video
      ? html`<iframe class="card-video" width="100%" height="315" src="${item.video}" frameBorder="0" allowFullScreen/>`
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
              <a class="card-header-heading-link" target="_blank" rel="noopener" @onclick="captureOutboundLink('${link}'); return false;" href="${link}">${title}</a>
            </h3>

            <span class="date">${ date }</span>
            <span class="slides">${ slides }</span>
          </div>

          <div class="card-content">
            <article>${abstract}</article>
          </div>
          
          <div class="card-footer">
            <span class="image">${ img }</a>
            <span class="video">${ video }</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-card', CardComponent);