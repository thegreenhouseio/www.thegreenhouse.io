---
template: 'post'
title: 'Gallinago 💡'
date: '10.28.2020'
description: 'NodeJS package for running and testing of CLIs.'
image: '//raw.githubusercontent.com/thescientist13/gallinago/master/.github/assets/gallinago.jpg'
---


In my free time when working on open source projects, I typically find myself working on build tools and CLI type projects.  These kind of projects, unlike the web apps I help build by day, typically take a combination of a user configuration file and some source code, and then generates some sort of output from that.  

For the [Greenwood](https://www.greenwoodjs.io/) project, which is a site builder, the output of that project is going to be HTML, CSS and JavaScript, all based on the user's source code (e.g. markdown files).  To help ensure we don't break anything as we go, and taking influence from **webpack** and how they setup their tests, the majority of the project's test coverage is predominently made up of test "cases"; wherein fixtures and files are used to recreate what a users folder structure might actually look like while using the tool.  (I think this would fall under the umbrealla of [_BDD_](https://en.wikipedia.org/wiki/Behavior-driven_development), but don't quote me on that)

In this way, given a user's config and content, **Greenwood** can ensure critical features are still working and validate behavior like:

* _Were the user's markdown files correctly converted to HTML?_
* _Was their CSS and JavaScript bundled and optimized?_
* _If they had a configuration file, were those options reflected in the output?_

<a href="https://github.com/thescientist13/gallinago" target="_blank" rel="noopener" onclick="getOutboundLink('https://github.com/thescientist13/gallinago');"><b>Gallinago</b></a> is the standalone tool I created that allows one to essentially stub out an entire user's "workspace" and then run your CLI against it, and see (and test!) what the output is.

For example, if a user had a directory for their project like this in **Greenwood**:

```bash
src/
  pages/
    index.md
    blog/
      first-post.md
      second-post.md
  styles/
    theme.css
```

The generated output should be something like this:

```bash
public/
  index.html
  blog/
    2020/
      first-post.html
      second-post.html
  styles/
    theme.bd54f1d4.css
```

Combined with **Mocha**, Greenwood can run its CLI against a bunch of [pre-scaffolded directories](https://github.com/ProjectEvergreen/greenwood/tree/master/packages/cli/test/cases) simulating different user configurations and content types, and ensure the correct output each time. 

I think that's...
<img alt="Larry David gif" src="//media.giphy.com/media/l1J9O9elEvuRjMyXu/giphy.gif">

So, please feel free to try it out and let me know what you think! ✌️