import { expect } from '@esm-bundle/chai';
import SocialLinksService from './social-links-service';

describe('SocialLinksService', () => {
  let socialLinksService;

  beforeEach(() => {
    socialLinksService = new SocialLinksService();
  });

  it('should be defined', () => {
    expect(socialLinksService).to.not.equal(undefined);
  });

  describe('getLinks (default)', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinks();
    });

    it('should have 5 links', () => {
      expect(links.length).to.equal(5);
    });

    it('should return the expected links from getLinks', () => {
      expect(links[0].name).to.equal('linkedin');
      expect(links[0].url).to.equal('https://www.linkedin.com/in/owen-buckley-91393447/');
  
      expect(links[1].name).to.equal('twitter');
      expect(links[1].url).to.equal('https://twitter.com/thegreenhouseio');
  
      expect(links[2].name).to.equal('medium');
      expect(links[2].url).to.equal('https://medium.com/@thegreenhouseio');
  
      expect(links[3].name).to.equal('github');
      expect(links[3].url).to.equal('https://github.com/thescientist13');
      
      expect(links[4].name).to.equal('youtube');
      expect(links[4].url).to.equal('https://youtube.com/playlist?list=PLRGBdE7KCzCfav_C807DsKaydedc6qq13');
    });

  });

  describe('getLinksAsMap', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinksAsMap();
    });

    it('should be a Map', () => {
      expect(links).to.not.equal(undefined);
      expect(typeof links).to.equal(typeof new Map());
    });

    it('should return the expected links from getLinks', () => {
      expect(links.get('linkedin')).to.equal('https://www.linkedin.com/in/owen-buckley-91393447/');
      expect(links.get('twitter')).to.equal('https://twitter.com/thegreenhouseio');
      expect(links.get('medium')).to.equal('https://medium.com/@thegreenhouseio');
      expect(links.get('github')).to.equal('https://github.com/thescientist13');
      expect(links.get('youtube')).to.equal('https://youtube.com/playlist?list=PLRGBdE7KCzCfav_C807DsKaydedc6qq13');
    });

  });

  describe('getLinksAsArray', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinksAsArray();
    });

    it('should be an array of five items', () => {
      expect(links.length).to.equal(5);
    });

    it('should return the expected links from getLinks', () => {
      expect(links[0]).to.equal('https://www.linkedin.com/in/owen-buckley-91393447/');
      expect(links[1]).to.equal('https://twitter.com/thegreenhouseio');
      expect(links[2]).to.equal('https://medium.com/@thegreenhouseio');
      expect(links[3]).to.equal('https://github.com/thescientist13');
      expect(links[4]).to.equal('https://youtube.com/playlist?list=PLRGBdE7KCzCfav_C807DsKaydedc6qq13');
    });

  });

});