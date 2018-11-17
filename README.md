# www.thegreenhouse.io
Personal blog / website at [https://www.thegreenhouse.io](https://www.thegreenhouse.io)

change?

## Overview
This is a static site for The Greenhouse's website built with [Gatsby](https://www.gatsbyjs.org/).  Has the usual stuff, e.g. Blog posts, about me, contact form, etc.  🌟 💯

## Development
Stuff to do / run. 🏃‍♂️

### Setup
After cloning the repo, do the following to get up and running
1. Install [NodeJS](https://nodejs.org/en/) (LTS)
1. Install [Yarn](https://yarnpkg.com/en/) (>= 1.x)
1. Run `yarn install`

### Tasks
- `yarn develop` - start local development server with file watching, live reload, etc
- `yarn build` - build the site for production deployment
- `yarn serve` - builds the site for production and starts a server locally (useful for a local demo)
- `yarn release --release_env=[stage|prod]` - deploys a build to S3, to either stage or prod
- `yarn test --[watch|coverage]` - run tests, opttionally in watch mode and / or to generate code coverage

## Release Management
The project is hosted in [AWS](https://aws.amazon.com/) and is setup to deploy continously on every merge to master in GitHub by running _running.js_.
1. Jenkins build and deploys to an S3 bucket
1. CloudFront fronts this S3 bucket
1. Route53 has a `CNAME` entry mapping _www.thegreenhouse.io_ to the CloudFront distrubution

To release manually run `yarn build && yarn release --release_env=[stage|prod]`

**Note:** the release expects the following access credentials to be available, either as environment variables or in a file, e.g _~/.aws/credentials.json_.
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`


**Note: see _release.js_ for additional variables needed.**