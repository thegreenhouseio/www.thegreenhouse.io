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
      url: 'https://github.com/thegreenhouseio'
    }];
  }

  getLinks(asMap) {
    let links = this.links;

    if (asMap) {
      let linksMap = {};

      this.links.map(link => {
        linksMap[link.name] = link.url;
      });

      links = linksMap;
    }

    return links;
  }
}

export default SocialLinksService;