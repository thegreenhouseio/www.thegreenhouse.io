class ProjectsService {
  constructor() {
    // add new projects at the top, i.e. FIFO
    this.projects = [{
      name: 'Health Of Mind Enhanced',
      description: 'Co-working and collaboration space I co-own in Newport, RI.',
      link: 'https://healthofmindenhanced.com/'
    },{
      name: 'Providence Geeks Website',
      description: 'Open source website project for the local tech meetup community.',
      link: 'https://github.com/ProvidenceGeeks',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png'
    }, {
      name: 'Newport Data Project',
      description: 'A local community group bridging technology and civic action.',
      link: 'http://newportdataproject.org/'
    }, {
      name: 'GitHub Dashboard',
      description: 'A local webapp I buitl to manage your issues and PRs in GitHub.',
      link: 'https://github.com/thescientist13/github-dashboard/'
    }, {
      name: 'Analog Studios',
      description: 'Local home music studio I co-run in Newport, RI.',
      link: 'https://www.analogstudios.net',
      img: 'https://s3.amazonaws.com/uploads.thegreenhouse.io/website/analogstudios-banner.png'
    }]
  }

  getProjects() {
    return this.projects;
  }
}

export default ProjectsService;