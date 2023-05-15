# Doggotel - Hotel for dogs

This is a hobbyist frontend project focused mainly on accessibility and performance.
The leitmotif is the website of a fictitious hotel for pets.

This is a [Next.js](https://nextjs.org/) project

## Demo

https://doggotelgui.vercel.app/

## Run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environmental Variables

The project uses the [Mapbox](https://www.mapbox.com/) library. A token is required, which can be obtained after logging in to the Mapbox website.

env.local. file should contain:

```bash
MAPBOX_TOKEN="your_token"
```

## Data

This is the implementation of the frontend part of the application. The data is retrieved from the mock backend consisting of json files.

## Linting

The project uses eslint custom config.
You can automatically fix linting errors:

```bash
npm run lint-fix
# or
yarn lint-fix
# or
pnpm lint-fix
```

## Git hooks

The project uses Husky to make a 'pre-commit' hook that runs the eslint check before each commit.

## Deployment

The site is deployed on the Vercel Platform, native to the Next.js framework
