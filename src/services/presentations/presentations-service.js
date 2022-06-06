class PresentationsService {
  constructor() {
    // add new presentations at the top, i.e. FIFO
    this.presentations = [{
      title: 'Web Components at the Edge',
      abstract: `It's time for the web to have some fun! Together, let's look at how we can take
                 the Web Components we write for the web and push them all the way to the edge through server rendering,
                 all while getting more HTML from our JavaScript!`,
      link: 'https://sched.co/11loQ',
      slides: 'https://github.com/thescientist13/web-components-at-the-edge',
      date: '6/8/2022'
    }, {
      title: 'Knowing Your TCO',
      abstract: `TCO stands for Total Cost of Ownership, and in this talk I specifically call out to the web development community and posit that
                  developer experience should be seen as a spectrum.  Not every project needs the same tools and complex solutions all the time.
                  My hope in this talk is that we can all come out of it thinking about our relationship with technology and productivity and how we can better balance the user experience.`,
      link: 'https://reliablewebsummit.com/session/knowing-your-tco-total-cost-of-ownership/',
      video: 'https://www.youtube.com/embed/6QBf5QCRSPI',
      slides: 'https://github.com/thescientist13/knowing-your-tco',
      date: '8/27/2021'
    }, {
      title: 'Eureka! ... Now What?',
      abstract: `For anyone who has always had that “lightbulb” moment but not sure how to realize it, this talk
                aims to help everyone realize a way to craft their own workflow and become a stronger advocate
                for their own success.`,
      link: 'https://www.meetup.com/CloudRI/events/263842768/',
      video: 'https://www.youtube.com/embed/ldgWLdzVGVg',
      slides: 'https://docs.google.com/presentation/d/1fZL4uoUUuhZEskn1-wpkL2DvU4hNjdI_vCcHFQeaIOs/edit?usp=sharing',
      date: '8/22/2019'
    }, {
      title: 'Building A Better Mouse Trap: Docker + SSR',
      abstract: `In this presentation, I discussed how Docker can help soften some of the thornier parts of implementing SSR,
                while maintaining great User Experiences (UX) and just as importantly, promoting good Developer Experiences (DX).`,
      link: 'https://jsi2018.sched.com/event/F76V?iframe=no',
      video: 'https://www.youtube.com/embed/Hj0hXuiz7Io',
      slides: 'https://docs.google.com/presentation/d/1vPwqGmbAqy6zjQ7JaqbMoS1I_8oMfFYcgXf6setvMcI/edit?usp=sharing',
      date: '10/12/2018'
    }, {
      title: 'Seeing The Light: Achieving Performant Web Applications',
      abstract: `Presented at ProvJS, in this session I explored the motivations and implementations for why performance matters in modern
                 web applications.  Topics covered included Lighthouse, ES2015+, module bundling, and the Critical Rendering Path.`,
      link: 'https://www.meetup.com/Prov-JS/events/249132270/',
      slides: 'https://docs.google.com/presentation/d/111An87jpLHBLAM1EMaTu9DlIcWKy6ekyyu4dqqogXso/edit?usp=sharing',
      date: '4/27/2018'
    }, {
      title: 'Finding Data',
      abstract: 'Short lightning talk created for Open Data Day as part of the Newport Data Project.',
      link: 'http://opendataday.org/',
      slides: 'https://docs.google.com/presentation/d/1QXMXivS8DQ_nQ2RLF1Q2MKD8rLwpD1NXXi_H1sR_S9k/edit?usp=sharing',
      date: '3/3/2018'
    }, {
      title: 'Providence Geeks 2.0: Building a Website and a Community',
      abstract: `A presentation I did at a Kenzan Meetup on a project sponsored by Kenzan to redesign and rebuild the website for the local community
                meetup group Providence Geeks.  Covered the entire process from design to delivery, and everything in between.`,
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/246620015/',
      date: '1/18/2018',
      video: 'https://www.youtube.com/embed/_23QLTJ-eIw'
    }, {
      title: 'Cultivating Developer Experience in the Age of Digital Transformation',
      abstract: `A talk I gave at BrooklynJS highlighting the need to cultivate developer experiences that value training, knowledge transfer, educational
                 support and professional development to fuel digital transformations and yield better products and stronger technical teams.`,
      link: 'https://github.com/brooklynjs/brooklynjs.github.io/issues/410',
      date: '9/21/2017'
    }, {
      title: 'A JavaScript Stack to Build On: Intersecting UX and DX',
      abstract: `Presentation I gave at ProvJS based on my article series for Kenzan that covered modern frontend development with Yarn, webpack and TypeScript.
                Included a code walkthrough on a webpack based React project.`,
      link: 'https://www.meetup.com/Prov-JS/events/241787664/',
      date: '8/3/2017'
    }, {
      title: 'JavaScript in 2017',
      abstract: 'Kenzan Meetup presentation on the current state of JavaScript in 2017.  Covered the history of JavaScript, ES2015+, package management, module bundling, and more.',
      link: 'https://www.meetup.com/Kenzan-Providence-Hack-Nights/events/237147005/',
      date: '8/3/2017',
      video: 'https://www.youtube.com/embed/HlHTaBUmfUQ'
    }, {
      title: 'Managing an Open Source Project in GitHub',
      abstract: 'Presentation I gave at the Linux Open Source Leadership Summit for Kenzan highlighting tips and features to use when managing an open source project in GitHub.',
      link: 'https://osleadershipsummit2017.sched.com/event/9Khi/best-practices-for-maintaining-an-oss-project-in-github-owen-buckley-kenzan',
      date: '3/16/2017'
    }];
  }

  getPresentations() {
    return this.presentations;
  }

  getModeledPresentations() {
    return this.presentations.map(presentation => {
      return {
        title: presentation.title,
        abstract: presentation.abstract,
        link: presentation.link,
        date: presentation.date,
        video: presentation.video,
        slides: presentation.slides
      };
    });
  }

}

export default PresentationsService;