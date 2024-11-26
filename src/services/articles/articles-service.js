class ArticlesService {
  constructor() {
    // add new articles at the top, i.e. FIFO
    this.articles = [{
      heading: 'Always Bet on HTML',
      abstract: `Inspired by my own experiences over the past couple years working on my project GreenwoodJS, this article 
        is a reflection of development in a time where JavaScript meta frameworks are all the rage, and how maybe writing a 
        little more HTML, and less JavaScript, might not actually be as bad as it can be made out to be.`,
      link: 'https://projectevergreen.github.io/blog/always-bet-on-html/',
      img: '/assets/logos/project-evergreen-logo.png',
      date: '8/2021'
    }, {
      heading: 'A PWA For Providence Geeks',
      subHeading: 'A Case Study in Performance (pt. 3)',
      abstract: `Part three in my performance focused series for the Providence Geeks website.  In this installment I detail upgrading to webpack 4 and route based 
                code splitting + lazy loading.`,
      link: 'https://medium.com/p/76f51e4b65b7/',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
      date: '5/15/2018'
    }, {
      heading: 'A PWA For Providence Geeks',
      subHeading: 'A Case Study in Performance (pt. 2)',
      abstract: `Part two in my performance focused series for the Providence Geeks website in which I go further into the technology used and the techniques 
                implemented to improve the performance and user exprience of the website.`,
      link: 'https://medium.com/@thegreenhouseio/a-pwa-for-providence-geeks-a-case-study-in-performance-pt-2-4ba811b7be7',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
      date: '1/6/2018'
    }, {
      heading: 'A PWA For Providence Geeks',
      subHeading: 'A Case Study in Performance (pt. 1)',
      abstract: `The start of a multipart series documenting my efforts to improve the performance of the Providence Geeks website.  This installment covers the 
                case to be made for making performance a core component of user experience.`,
      link: 'https://medium.com/@thegreenhouseio/a-pwa-for-pvd-geeks-a-case-study-in-performance-and-progressive-web-applications-pt-1-e8cc5c1d0f0a',
      img: 'https://cdn-images-1.medium.com/max/2000/1*Itn_4AfT13qgCN-YcsuMsQ.png',
      date: '1/6/2018'
    }, {
      heading: 'A JavaScript Stack to Build On',
      subHeading: 'Intersecting Developer Experience with User Experience',
      abstract: `An article series for Linux.com in partnership with the JS Foundation that I lead at Kenzan, covering the frontend technologies Yarn, webpack and 
                TypeScript and how they can be used with popular frontend libraries and frameworks like Angular and React.`,
      link: 'https://techblog.kenzan.com/modern-day-front-end-development-stack/',
      date: '7/2017'
    }, {
      heading: 'Managing an Open Source Project in GitHub',
      abstract: `An article to accompany my presentation on GitHub best practices for Kenzan that goes through a number of the features that can be implemted to 
                enable better contributor and maintainer experiences when managing an open source project in GitHub.`,
      link: 'https://techblog.kenzan.com/managing-open-source-project-github/',
      img: 'https://techblog.kenzan.com/wp-content/uploads/2015/11/cropped-techblogheader.jpg',
      date: '2/2017'
    }, {
      heading: 'To ES∞ and Beyond: Bulletproof Front-End JavaScript',
      abstract: `Among the plethora of amazing open source tools out there, new changes to the JavaScript language itself have 
                allowed for the writing and maintening of cleaner and more elegant code, making code written today in ES2015+ more
                immune to churn and less likely to become “legacy,” even after a few years.`,
      link: 'https://techblog.kenzan.com/to-es%e2%88%9e-and-beyond-bulletproof-front-end-javascript/',
      img: 'https://techblog.kenzan.com/wp-content/uploads/2015/11/cropped-techblogheader.jpg',
      date: '5/2016'
    }];
  }

  getArticles() {
    return this.articles;
  }

  getModeledArticles() {
    return this.articles.map(article => {
      const subHeading = article.subHeading ? `: ${article.subHeading}` : '';
      
      return {
        abstract: article.abstract,
        date: article.date,
        link: article.link,
        img: article.img,
        title: `${article.heading} ${subHeading}`
      };
    });
  }
}

export default ArticlesService;