# www.thegreenhouse.io
[![CircleCI](https://circleci.com/gh/thegreenhouseio/www.thegreenhouse.io/tree/master.svg?style=svg)](https://circleci.com/gh/thegreenhouseio/www.thegreenhouse.io/tree/master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2c9b7dc5-c01a-43eb-86a4-094f7720e2fd/deploy-status)](https://app.netlify.com/sites/silly-snyder-ece0b2/deploys)
[![GitHub release](https://img.shields.io/github/tag/thegreenhouseio/www.thegreenhouse.io.svg)](https://github.com/thegreenhouseio/www.thegreenhouse.io/tags)
[![GitHub issues](https://img.shields.io/github/issues-raw/thegreenhouseio/www.thegreenhouse.io.svg)](https://github.com/thegreenhouseio/www.thegreenhouse.io/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/thegreenhouseio/www.thegreenhouse.io.svg)](https://github.com/thegreenhouseio/www.thegreenhouse.io/issues)


## Overview
This is a static site for [The Greenhouse's website](https://www.thegreenhouse.io) built with [Greenwood](https://www.greenwoodjs.io/).  Has the usual stuff, e.g. Blog posts, about me, contact form, etc.  🌟 💯

## Development
Stuff to do / run. 🏃‍♂️

### Setup
After cloning the repo, do the following to get up and running
1. Install [NodeJS](https://nodejs.org/en/) (LTS)
1. Install [Yarn](https://yarnpkg.com/en/) (>= 1.x)
1. Run `yarn install`
1. Add `127.0.0.1 local.thegreenhouse.io` to your `/etc/hosts` file (optional)

### Tasks
- `yarn develop` - Start a local development server with file watching, live reload, etc
- `yarn build` - Build the site for production deployment
- `yarn serve` - Build the site for production and start a server locally (useful for a local demo)
- `yarn test:tdd` - Run tests in watch mode
- `yarn test` - Run all tests in a single run (used for CI)

## Release Management
The project is hosted by [Netlify](https://www.netlify.com/) and is setup to deploy continously on every merge to master in GitHub.

CircleCI is used for continuous integration on PRs and Netlify will deploy preview builds for all PRs.
