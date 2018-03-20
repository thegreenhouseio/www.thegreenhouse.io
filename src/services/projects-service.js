class ProjectsService {
  constructor() {
    // add new projects at the top, i.e. FIFO
    this.projects = [{
      name: 'Health Of Mind Enhanced (HOME)',
      description: 'Co-working space I co-own in Newport, RI focused on providing an open space to work, study, and collobrate in a health conscious work environment featuring standing desks and bike desks, all in a modern art gallery setting.  A great place to work from HOME!',
      link: 'https://healthofmindenhanced.com/'
    },{
      name: 'Providence Geeks Website',
      description: 'Open source website project for the local tech meetup community Providence Geeks, that I helped lead for Kenzan and continue to maintain and help develop.  Currently working on making the site performant and consideration for becoming a Progressive Web Application (PWA).',
      link: 'https://github.com/ProvidenceGeeks',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png'
    }, {
      name: 'Newport Data Project',
      description: 'A local community group combining technology and civic action by finding and consuming open data sets to address challenges right here in Newport like roads and crosswalks placement, sea rise impact, and bicycle safety.  Thinking globally, acting locally.',
      link: 'http://newportdataproject.org/'
    }, {
      name: 'GitHub Dashboard',
      description: 'A local webapp I built to manage your issues and PRs in GitHub.  It allows you to track issues and PRs assigned to you across all your repositories, both personal and subscribed.',
      link: 'https://github.com/thescientist13/github-dashboard/'
    }, {
      name: 'Analog Studios',
      description: 'Local home music studio I co-run in Newport, RI with my friend.  A great place to come jam or lay down some tracks, but always keepin it reel.',
      link: 'https://www.analogstudios.net',
      img: 'https://s3.amazonaws.com/uploads.thegreenhouse.io/website/analogstudios-banner.png'
    }]
  }

  getProjects() {
    return this.projects;
  }
}

export default ProjectsService;