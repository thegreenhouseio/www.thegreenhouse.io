class SocialLinksService {
  constructor() {
    this.links = [{
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/owen-buckley-91393447/'
    }, {
      name: 'twitter',
      url: 'https://twitter.com/thegreenhouseio'
    }, {
      name: 'medium',
      url: 'https://medium.com/@thegreenhouseio'
    }, {
      name: 'github',
      url: 'https://github.com/thescientist13'
    }];
  }

  getLinks() {
    return this.links;
  }

  getLinksAsMap() {
    let linksMap = new Map();

    this.links.forEach(link => {
      linksMap.set(link.name, link.url);
    });

    return linksMap;
  }

  getLinksAsArray() {
    let links = [];

    this.links.forEach(link => {
      links.push(link.url);
    });

    return links;
  }

}

export default SocialLinksService;