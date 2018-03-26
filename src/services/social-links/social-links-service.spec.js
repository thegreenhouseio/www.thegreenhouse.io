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

  describe('getLinks (asMap)', () => {
    let links;

    beforeEach(() => {
      links = socialLinksService.getLinks(true);
    });

    it('should be a hash map', () => {
      expect(links).toBeDefined();
    });

    it('should return the expected links from getLinks', () => {
      expect(links.linkedin).toBe('https://www.linkedin.com/in/owen-buckley-91393447/');
      expect(links.twitter).toBe('https://twitter.com/thegreenhouseio');
      expect(links.medium).toBe('https://medium.com/@thegreenhouseio');
      expect(links.github).toBe('https://github.com/thegreenhouseio');
    });

  });

});