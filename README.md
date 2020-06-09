# vision

[![Netlify Status](https://api.netlify.com/api/v1/badges/2b2fecb4-97bc-4653-8492-54202153c1f6/deploy-status)](https://app.netlify.com/sites/infallible-neumann-dc1e95/deploys)

## Requirements

- Node.js v12
- Yarn v1
- Netlify account
- Contentful account

## (Netlify) Deploy settings

- Base directory: not set
- Build command: `yarn && yarn gentypes && yarn build`
- Publish directory: `out`
- environment variables
  - `SPACE`
  - `ENV`
  - `ACCESS_TOKEN` (Content delivery token)
  - `MANAGEMENT_AT` (Content management token)

## Install dependencies

```bash
yarn
```

## Create `/.env` file

```text
SPACE=...
ENV=...
ACCESS_TOKEN=...
MANAGEMENT_AT=...
```

## Generate `/contentful.d.ts`

```bash
yarn gentypes
```

## Build

```bash
yarn build
```

## Lauch dev server

```bash
yarn dev
```

## Test

```bash
yarn test
```
