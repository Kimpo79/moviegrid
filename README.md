# Movie list frontend test

Demo URL: https://thirsty-lamarr-ac37d8.netlify.com/

**How to run**

Clone this repo

- `npm i`
- `npm run start` to run in development mode
- `npm run test` to start test runner

Production build

- `npm run build` to build a production bundle mode with minified assets
- `npm i -g serve` install serve (More info here: https://github.com/zeit/serve)
- `serve -s build` serves static site on http://localhost:5000

**OBS!**

This app assumes you have an API key for https://www.themoviedb.org API endpoints
You will need to set the environment variable `REACT_APP_API_KEY=YOUR_API_KEY` when starting the app.

Either create a `.env` file in the project root and add `REACT_APP_API_KEY=YOUR_API_KEY` to it or prepend it to your npm command like this
`REACT_APP_API_KEY=YOUR_API_KEY npm run start`

## Test Requirements

Time limit: 4 hours

- A search field.
- A list of search results. Sorted by relevance.
- A detail view of a movie including a list of actors.
- It should be responsive and look good on, at least, desktop, tablet portrait and mobile
  portrait.
- It should support the latest versions of IE, Chrome, Safari and Firefox.
- JS and CSS should be minified.

**Make it pretty**

You might not be a designer or UX developer but try to make it good looking.

**Tooling**

You should use frameworks of your choice.
We want you to use a linter, do styling with SASS/Less and write unit tests for your code.
Your tests should run as soon as you change a relevant file.

## My thoughts

With the time limitation i decided to use Create React App since it seemed to tick a lot of the boxes among the requirement out of the box. I had actually never used CRA before and was pleasantly surprised by how easy it was to get started.

The API already seemed to return results based on relevance so not much to do there.

**What would i do with more time?**

- Refactor the wrapper for axios
- Write more tests
