class PresentationsService {
  constructor() {
    // add new presentations at the top, i.e. FIFO
    this.presentations = [{
      title: 'Providence Geeks 2.0: Building a Website and a Community',
      abstract: 'A presentation I did at a Kenzan Meetup on a project sponsored by Kenzan to redesign and rebuild the website for the local community meetup group Providence Geeks.  Covered the entire process from design to delivery, and everything in between.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/246620015/',
      date: '1/18/2018',
      video: 'https://www.youtube.com/embed/_23QLTJ-eIw',
    }, {
      title: 'Cultivating Developer Experience in the Age of Digitial Transformation',
      abstract: 'A talk I gave at BrooklynJS highlighting the need to cultivate developer experiences that value training, knowledge transfer, educational support and professional development to fuel digital transformations and yield better products and stronger technical teams.',
      link: 'https://github.com/brooklynjs/brooklynjs.github.io/issues/410',
      date: '9/21/2017'
    }, {
      title: 'A JavaScript Stack to Build On: Intersecting UX and DX',
      abstract: 'Presentation I gave at ProvJS based on my article series for Kenzan that covered modern frontend development with Yarn, webpack and TypeScript.  Included a code walkthrough on a webpack based React project.',
      link: 'https://www.meetup.com/Prov-JS/events/241787664/',
      date: '8/3/2017'
    }, {
      title: 'JavaScript in 2017',
      abstract: 'Kenzan Meetup presentation on the current state of JavaScript in 2017.  Covered the history of JavaScript, ES2015+, package management, module bundling, and more.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/237147005/',
      date: '8/3/2017', 
      video: 'https://www.youtube.com/embed/HlHTaBUmfUQ',
    }, {
      title: 'Managing an Open Source Project in GitHub',
      abstract: 'Presentation I gave at the Linux Open Source Leadership Summit for Kenzan highlighting tips and features to use when managing an open source project in GitHub.',
      link: 'https://osleadershipsummit2017.sched.com/event/9Khi/best-practices-for-maintaining-an-oss-project-in-github-owen-buckley-kenzan',
      date: '3/16/2017'
    }]
  }

  getPresentations() {
    return this.presentations;
  }
}

export default PresentationsService;