---
template: 'blog'
title: 'Contributary'
---

```render
 <app-blog-post
  title='Contributary'
  description='A project for helping connect open source with the open source community.'
  date='11.19.2018' 
  image='https://s3.amazonaws.com/hosted.contributary.community/media/contributary-logo-invert.png'>

  <div>            
    <p>From my own personal experience, I can say getting involved in open source has certainly helped me mature multiple aspects of my professional and personal life.  It was for this reason that as my job responsibilities started to include helping mentoring and training junior developers, I would often use open source as a good jumping off point for getting involved in software development.  Although <i>I</i> knew where to look, for someone new to their respective community and not familiar with all the tools and languages or even GitHub itself, I realized there was a way to help make a difference.</p>

    <p><a target="_blank" href="https//www.contributary.community">Contributary</a> is a new project I have started with the goal of helping connect open source projects with the open source community by providing a webapp and general tools to make searching out and contributing to open source projects easier and more intuitive.  
    </p>

    <img src="https://s3.amazonaws.com/hosted.contributary.community/media/contributary-screenshot-0.2.0.png" alt="Contributary screeshot"/>

    <p>Contributary has only just recently launched in an early release phase and is eager to look for its own set of contributors.  The project is <a target="_blank" href="https://github.com/ContributaryCommunity" @onclick="captureOutboundLink('https://github.com/ContributaryCommunity'); return false;">open source</a> so you can use Contributary to find ways to contribute to Contributary (much meta)! 🤓</p>
  </div>
  
</app-blog-post>
```