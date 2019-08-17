import ProjectsService from './projects-service';

describe('ProjectsService', () => {
  let projectsService;

  beforeEach(() => {
    projectsService = new ProjectsService();
  });

  it('should be defined', () => {
    expect(projectsService).toBeDefined();
  });

  it('should return some projects from getProjects', () => {
    const projects = projectsService.getProjects();

    expect(projects.length).toBeGreaterThan(1);
  });

  it('should return modeled projects from getModeledProjects with basic properties', () => {
    const projects = projectsService.getModeledProjects();

    projects.map(project => {
      expect(project.title).toBeDefined();
      expect(project.abstract).toBeDefined();
      expect(project.link).toBeDefined();
    });
  });
});