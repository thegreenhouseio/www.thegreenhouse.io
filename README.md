# www.thegreenhouse.io
![GitHub Actions status](https://github.com/thegreenhouseio/www.thegreenhouse.io/workflows/Master%20Integration/badge.svg)
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
1. Run `npm ci`

### Tasks
- `npm run dev` - Start a local development server with file watching, live reload, etc
- `npm run build` - Build the site for production deployment
- `npm run serve` - Build the site for production and start a server locally (useful for a local demo)
- `npm run test:tdd` - Run tests in watch mode
- `npm run test` - Run all tests in a single run (used for CI)

## Release Management
The project is hosted by [Netlify](https://www.netlify.com/) and is setup to deploy continously on every merge to master in GitHub.

[GitHub Actions](https://github.com/thegreenhouseio/www.thegreenhouse.io/actions) are used for continuous integration on PRs and Netlify will deploy preview builds for all PRs.
