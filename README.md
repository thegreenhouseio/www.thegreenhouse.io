# www.thegreenhouse.io
Personal blog / website at [https://www.thegreenhouse.io](https://www.thegreenhouse.io)

## Overview
This is a static site for The Greenhouse's website built with [Gatsby]().  Has the usual stuff, e.g. Blog posts, about me, contact form, etc.  🌟 💯

## Development
Stuff to do / run. 🏃‍♂️

### Setup
Install the following to get up and running
1. Install NodeJS
1. Install Yarn
1. Run `yarn install`

### Tasks
- `yarn develop` - start local development server with file watching, live reload, etc
- `yarn build` - build the site for production deployment
- `yarn serve` - builds the site and starts a server locally
- `yarn release` - builds the site for production and deploys to S3

## Release Management
The project is hosted in [AWS]() and is setup to deploys continously on every merge to master in GitHub by running _running.js_.
1. Jenkins build and deploys to an S3 bucket
1. Cloudfront fronts this S3 bucket
1. Route53 has a `CNAME` entry mapping _www.thegreenhouse.io_ to the Cloudfront distrubution

Note: the release expects `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to exported environment variables or as a credentials files in _~/.aws/_