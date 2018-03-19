class ArticlesService {
  constructor() {
    // add new articles at the top, i.e. FIFO
    this.articles = [{
      heading: 'A PWA For Providence Geeks',
      subHeading: 'A Case Study in Performance (pt. 2)',
      abstract: 'Part two in my performance series for the Providence Geeks website.',
      link: 'https://medium.com/@thegreenhouseio/a-pwa-for-providence-geeks-a-case-study-in-performance-pt-2-4ba811b7be7',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
      date: '1/6/2018',
    }, {
      heading: 'A PWA For Providence Geeks',
      subHeading: 'A Case Study in Performance (pt. 1)',
      abstract: 'A multipart series documenting my efforts to improve the performance of the Providence Geeks website.',
      link: 'https://medium.com/@thegreenhouseio/a-pwa-for-pvd-geeks-a-case-study-in-performance-and-progressive-web-applications-pt-1-e8cc5c1d0f0a',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
      date: '1/6/2018',
    }, {
      heading: 'A JavaScript Stack to Build On',
      subHeading: 'Intersecting Developer Experience with User Experience',
      abstract: 'A 5 part article series for Linux.com in partnership with the JS Foundation through Kenzan.',
      link: 'https://techblog.kenzan.com/modern-day-front-end-development-stack/',
      img: '',
      date: '7/2018',
    }]
  }

  getArticles() {
    return this.articles;
  }
}

export default ArticlesService;