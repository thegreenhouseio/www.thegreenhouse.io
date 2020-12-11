---
template: 'post'
title: 'Copy Dots 💡'
date: '08.15.2020'
description: 'Quickly copy dot files with a single command'
image: '//raw.githubusercontent.com/thescientist13/copy-dots/master/.github/assets/dots.jpg'
---

Every once in a while I get that itch to automate something that I find myself repeating frequently over the course of my new development; which is starting new open source projects.  (just like the one I'm about to tell you about! 😎)

Whenever I start a new (JavaScript) project, there's usually a common set of tools that I bring along for the ride with me each time.  Awesome tools **ESLint**, **Mocha**, and more!  Often times I find myself just copy / pasting the dot and config files from one repository directory to another one.  Essentially just doing this everytime

```
$ cp -r /path/to/some/project .
```

But this doesn't account for hidden / dot files which are quite predmoninent in software projects. (you can probably tell where this is all leading...) 

Well, now I can do that same copy commmand and even filter it, just by using my new project <a href="https://github.com/thescientist13/copy-dots" target="_blank" rel="noopener" onclick="getOutboundLink('https://github.com/thescientist13/copy-dots');"><b>copy-dots</b></a>!

<img alt="Demo gif of copy-dots" src="//raw.githubusercontent.com/thescientist13/copy-dots/master/.github/assets/copy-dots-demo.gif">

Check out the repo and give it a try, and please let me know what you think! ✌️