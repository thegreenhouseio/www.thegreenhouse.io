import { expect } from '@esm-bundle/chai';
import './card.js';

describe('Card component', () => {
  let card;

  beforeEach(async () => {
    card = document.createElement('app-card');

    document.body.appendChild(card);

    await card.updateComplete;
  });

  afterEach(() => {
    card.remove();
    card = null;
  });

  describe('Default Behavior', () => {
    
    it('should be have a wrapper', () => { 
      const wrapper = card.shadowRoot.querySelectorAll('.wrapper');

      expect(wrapper.length).to.equal(1);
    });

    it('should have an empty social icon link', () => {
      const socialIconLink = card.shadowRoot.querySelectorAll('app-social-icon-link');

      expect(socialIconLink.length).to.equal(1);
      expect(socialIconLink[0].link).to.equal('');
    });

    it('should have an empty heading link', () => {
      const headingLink = card.shadowRoot.querySelectorAll('.wrapper .card-header h3 a');

      expect(headingLink.length).to.equal(1);
      expect(headingLink[0].href).contain('');
      expect(headingLink[0].innerHTML).contain('');
    });

    it('should have an empty date display', () => {
      const date = card.shadowRoot.querySelectorAll('.wrapper .date');

      expect(date.length).to.equal(1);
      expect(date[0].innerHTML).contain('');
    });

    it('should have an slides link', () => {
      const slides = card.shadowRoot.querySelectorAll('.wrapper .slides');

      expect(slides.length).to.equal(1);
      expect(slides[0].innerHTML).contain('');
    });

    it('should have an empty abstract link', () => {
      const content = card.shadowRoot.querySelectorAll('.wrapper .card-content article');

      expect(content.length).to.equal(1);
      expect(content[0].innerHTML).contain('');
    });

    it('should have an empty image in the footer', () => {
      const image = card.shadowRoot.querySelectorAll('.wrapper .card-footer .image');

      expect(image.length).to.equal(1);
      expect(image[0].innerHTML).contain('');
    });

    it('should have an empty video in the footer', () => {
      const video = card.shadowRoot.querySelectorAll('.wrapper .card-footer .video');

      expect(video.length).to.equal(1);
      expect(video[0].innerHTML).contain('');
    });

  });

  describe('Complete Card', () => {
    const mockCard = {
      link: 'http://www.some-domain.com/',
      title: 'Card Ttitle',
      date: '1/2/2019',
      abstract: 'Lorum Ipsum',
      slides: 'http://slides.google.com/abc123',
      img: 'http://static.some-domain.com/image.png',
      video: 'http://www.youtube.com/abc123'
    };

    beforeEach(async () => {
      card = document.createElement('app-card');
      card.item = mockCard;
  
      document.body.appendChild(card);
  
      await card.updateComplete;
    });

    it('should be have a wrapper', () => { 
      const wrapper = card.shadowRoot.querySelectorAll('.wrapper');

      expect(wrapper.length).to.equal(1);
    });

    // TODO test .link attribute
    xit('should have the expect social icon link with link', () => {
      const socialIconLink = card.shadowRoot.querySelectorAll('app-social-icon-link');

      expect(socialIconLink.length).to.equal(1);
      expect(socialIconLink[0].getAttribute('.link')).to.equal(mockCard.link);
    });

    it('should have an empty heading link', () => {
      const headingLink = card.shadowRoot.querySelectorAll('.wrapper .card-header h3 a');

      expect(headingLink.length).to.equal(1);
      expect(headingLink[0].href).to.equal(mockCard.link);
      expect(headingLink[0].innerHTML).contain(mockCard.title);
    });

    it('should have the expected date display', () => {
      const date = card.shadowRoot.querySelectorAll('.wrapper .card-header .date');

      expect(date.length).to.equal(1);
      expect(date[0].innerHTML).contain(`Date: ${mockCard.date}`);
    });

    it('should have the expected slide link', () => {
      const slide = card.shadowRoot.querySelectorAll('.wrapper .card-header .slides');

      expect(slide.length).to.equal(1);
      expect(slide[0].innerHTML).contain(mockCard.slides);
    });

    it('should have the expected abstract', () => {
      const content = card.shadowRoot.querySelectorAll('.wrapper .card-content article');

      expect(content.length).to.equal(1);
      expect(content[0].innerHTML).contain(mockCard.abstract);
    });

    it('should have the expected image in the footer', () => {
      const image = card.shadowRoot.querySelectorAll('.wrapper .card-footer img');

      expect(image.length).to.equal(1);
      expect(image[0].src).to.equal(mockCard.img);
    });

    it('should have the expected video in the footer', () => {
      const video = card.shadowRoot.querySelectorAll('.wrapper .card-footer iframe');

      expect(video.length).to.equal(1);
      expect(video[0].src).to.equal(mockCard.video);
    });

  });

});