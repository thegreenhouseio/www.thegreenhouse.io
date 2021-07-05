import { expect } from '@esm-bundle/chai';
import PresentationsService from './presentations-service';

describe('PresentationsService', () => {
  let presentationsService;

  beforeEach(() => {
    presentationsService = new PresentationsService();
  });

  it('should be defined', () => {
    expect(presentationsService).to.not.equal(undefined);
  });

  it('should return some presentations from getPresentations', () => {
    const presentations = presentationsService.getPresentations();

    expect(presentations.length).greaterThan(1);
  });

  it('should return modeled presentations from getModeledPresentations with basic properties', () => {
    const presentations = presentationsService.getModeledPresentations();

    presentations.map(presentation => {
      expect(presentation.title).to.not.equal(undefined);
      expect(presentation.abstract).to.not.equal(undefined);
      expect(presentation.link).to.not.equal(undefined);
      expect(presentation.date).to.not.equal(undefined);
    });
  });
});