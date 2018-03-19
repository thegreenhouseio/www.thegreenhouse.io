class PresentationsService {
  constructor() {
    // add new articles at the top, i.e. FIFO
    this.presentations = [{
      title: 'Providence Geeks 2.0: Building a Website and a Community',
      abstract: 'Part two in my performance series for the Providence Geeks website.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/246620015/',
      date: '1/18/2018',
      video: 'https://www.youtube.com/embed/_23QLTJ-eIw',
    }, {
      title: 'A JavaScript Stack to Build On: Intersecting UX and DX',
      abstract: 'ProvJS Meetup presentation I gave on my article series for Kenzan',
      link: 'https://www.meetup.com/Prov-JS/events/241787664/',
      date: '8/3/2017'
    }, {
      title: 'JavaScript in 2017',
      abstract: 'Kenzan Meetup Presentation on the current state of JavaScript',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/237147005/',
      date: '8/3/2017', 
      video: 'https://www.youtube.com/embed/HlHTaBUmfUQ',
    }, {
      title: 'Managing an Open Source Project in GitHub',
      abstract: 'Presentation I gave at the Linux Open Source Leadership Summit for Kenzan',
      link: 'http://events.linuxfoundation.org/events/open-source-leadership-summit/program/schedule',
      date: '3/16/2017'
    }]
  }

  getPresentations() {
    return this.presentations;
  }
}

export default PresentationsService;