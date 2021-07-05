import { expect } from '@esm-bundle/chai';
import ArticlesService from './articles-service';

describe('ArticlesService', () => {
  let articlesService;

  beforeEach(() => {
    articlesService = new ArticlesService();
  });

  it('should be defined', () => {
    expect(articlesService).not.equal(undefined);
  });

  it('should return some articles from getArticles', () => {
    const articles = articlesService.getArticles();

    expect(articles.length).greaterThan(1);
  });

  it('should return modeled articles from getModeledArticles with basic properties', () => {
    const articles = articlesService.getModeledArticles();

    articles.map(article => {
      expect(article.title).to.not.equal(undefined);
      expect(article.abstract).to.not.equal(undefined);
      expect(article.link).to.not.equal(undefined);
      expect(article.date).to.not.equal(undefined);
    });
  });
});