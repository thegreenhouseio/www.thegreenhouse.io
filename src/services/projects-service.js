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
      link: 'https://github.com/ProvidenceGeeks'
    }, {
      name: 'Newport Data Project',
      description: 'A local community group bridging technology and civic action.',
      link: 'http://newportdataproject.org/'
    }, {
      name: 'GitHub Dashboard',
      description: 'A local webapp I buitl to manage your issues and PRs in GitHub.',
      link: 'https://github.com/thescientist13/github-dashboard/'
    }, {
      name: 'GitHub',
      description: 'All Greenhouse projects in GitHub.',
      link: 'https://github.com/thegreenhouseio'
    }]
  }

  getProjects() {
    return this.projects;
  }
}

export default ProjectsService;