import SocialLinksService from './social-links-service';

describe('SocialLinksService', () => {
  let socialLinksService;

  beforeEach(() => {
    socialLinksService = new SocialLinksService();
  });

  it('should be defined', () => {
    expect(socialLinksService).toBeDefined();
  });

  describe('getLinks (default)', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinks();
    });

    it('should have 4 links', () => {
      expect(links.length).toBe(4);
    });

    it('should return the expected links from getLinks', () => {
      expect(links[0].name).toBe('linkedin');
      expect(links[0].url).toBe('https://www.linkedin.com/in/owen-buckley-91393447/');
  
      expect(links[1].name).toBe('twitter');
      expect(links[1].url).toBe('https://twitter.com/thegreenhouseio');
  
      expect(links[2].name).toBe('medium');
      expect(links[2].url).toBe('https://medium.com/@thegreenhouseio');
  
      expect(links[3].name).toBe('github');
      expect(links[3].url).toBe('https://github.com/thegreenhouseio');
    });

  });

  describe('getLinksAsMap', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinksAsMap();
    });

    it('should be a Map', () => {
      expect(links).toBeDefined();
      expect(typeof links).toBe(typeof new Map());
    });

    it('should return the expected links from getLinks', () => {
      expect(links.get('linkedin')).toBe('https://www.linkedin.com/in/owen-buckley-91393447/');
      expect(links.get('twitter')).toBe('https://twitter.com/thegreenhouseio');
      expect(links.get('medium')).toBe('https://medium.com/@thegreenhouseio');
      expect(links.get('github')).toBe('https://github.com/thegreenhouseio');
    });

  });

  describe('getLinksAsArray', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinksAsArray();
    });

    it('should be an array of four items', () => {
      expect(links.length).toBe(4);
    });

    it('should return the expected links from getLinks', () => {
      expect(links[0]).toBe('https://www.linkedin.com/in/owen-buckley-91393447/');
      expect(links[1]).toBe('https://twitter.com/thegreenhouseio');
      expect(links[2]).toBe('https://medium.com/@thegreenhouseio');
      expect(links[3]).toBe('https://github.com/thegreenhouseio');
    });

  });

});