import { expect } from '@esm-bundle/chai';
import ProjectsService from './projects-service';

describe('ProjectsService', () => {
  let projectsService;

  beforeEach(() => {
    projectsService = new ProjectsService();
  });

  it('should be defined', () => {
    expect(projectsService).to.not.equal(undefined);
  });

  it('should return some projects from getProjects', () => {
    const projects = projectsService.getProjects();

    expect(projects.length).greaterThan(1);
  });

  it('should return modeled projects from getModeledProjects with basic properties', () => {
    const projects = projectsService.getModeledProjects();

    projects.map(project => {
      expect(project.title).to.not.equal(undefined);
      expect(project.abstract).to.not.equal(undefined);
      expect(project.link).to.not.equal(undefined);
    });
  });
});