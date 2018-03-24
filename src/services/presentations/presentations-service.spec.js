import PresentationsService from './presentations-service';

describe('PresentationsService', () => {
  let presentationsService;

  beforeEach(() => {
    presentationsService = new PresentationsService();
  });

  it('should be defined', () => {
    expect(presentationsService).toBeDefined();
  });

  it('should return some presentations from getPresentations', () => {
    const presentations = presentationsService.getPresentations();

    expect(presentations.length).toBeGreaterThan(1);
  });

  it('should return modeled presentations from getModeledPresentations with basic properties', () => {
    const presentations = presentationsService.getModeledPresentations();

    presentations.map(presentation => {
      expect(presentation.title).toBeDefined();
      expect(presentation.abstract).toBeDefined();
      expect(presentation.link).toBeDefined();
      expect(presentation.date).toBeDefined();
    });
  });
});