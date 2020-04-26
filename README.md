# vision

[![Netlify Status](https://api.netlify.com/api/v1/badges/2b2fecb4-97bc-4653-8492-54202153c1f6/deploy-status)](https://app.netlify.com/sites/infallible-neumann-dc1e95/deploys)

## Requirements

- Netlify account
- Contentful account
- yarn v1.x

## (Netlify) Deploy settings

- Base directory: not set
- Build command: `yarn && yarn build`
- Publish directory: `out`
- environment variables
  - `SPACE`
  - `ENV`
  - `ACCESS_TOKEN`

## Install dependencies

```bash
yarn
```

## Create `/.env` file

```text
SPACE=...
ENV=...
ACCESS_TOKEN=...
```

## Build

```bash
yarn build
```

## Lauch dev server

```bash
yarn dev
```
