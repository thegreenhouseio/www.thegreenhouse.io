class PresentationsService {
  constructor() {
    // add new presentations at the top, i.e. FIFO
    this.presentations = [{
      title: 'Providence Geeks 2.0: Building a Website and a Community',
      abstract: 'A meetup I did at the Kenzan Meetup on the work done to rebuild the website for the local community meetup group Providence Geeks.  Covers the entire process from design to delivery and everything in between.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/246620015/',
      date: '1/18/2018',
      video: 'https://www.youtube.com/embed/_23QLTJ-eIw',
    }, {
      title: 'A JavaScript Stack to Build On: Intersecting UX and DX',
      abstract: 'ProvJS Meetup presentation I gave on my article series for Kenzan, covering the topic of Yarn, webpack and TypeScript.  Included a code walkthrough on a webpack project.',
      link: 'https://www.meetup.com/Prov-JS/events/241787664/',
      date: '8/3/2017'
    }, {
      title: 'JavaScript in 2017',
      abstract: 'Kenzan Meetup Presentation on the current state of JavaScript in 2017.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/237147005/',
      date: '8/3/2017', 
      video: 'https://www.youtube.com/embed/HlHTaBUmfUQ',
    }, {
      title: 'Managing an Open Source Project in GitHub',
      abstract: 'Presentation I gave at the Linux Open Source Leadership Summit for Kenzan for tips and features to use in GitHub for managing an open source project in GitHub.',
      link: 'http://events.linuxfoundation.org/events/open-source-leadership-summit/program/schedule',
      date: '3/16/2017'
    }]
  }

  getPresentations() {
    return this.presentations;
  }
}

export default PresentationsService;