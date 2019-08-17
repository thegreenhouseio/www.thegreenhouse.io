import ArticlesService from './articles-service';

describe('ArticlesService', () => {
  let articlesService;

  beforeEach(() => {
    articlesService = new ArticlesService();
  });

  it('should be defined', () => {
    expect(articlesService).toBeDefined();
  });

  it('should return some articles from getArticles', () => {
    const articles = articlesService.getArticles();

    expect(articles.length).toBeGreaterThan(1);
  });

  it('should return modeled articles from getModeledArticles with basic properties', () => {
    const articles = articlesService.getModeledArticles();

    articles.map(article => {
      expect(article.title).toBeDefined();
      expect(article.abstract).toBeDefined();
      expect(article.link).toBeDefined();
      expect(article.date).toBeDefined();
    });
  });
});