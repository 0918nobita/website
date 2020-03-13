# `@vision/ssg`

## `build.sh`

```bash
MANAGEMENT_ACCESS_TOKEN="..." \
SPACE_ID="..." \
ENV="..." \
yarn contentful-typescript-codegen --output src/contentful.d.ts && \
yarn tsc
```

## `run.sh`

```bash
CDA_ACCESS_TOKEN="..." \
SPACE_ID="..." \
node dist/index.js
```
