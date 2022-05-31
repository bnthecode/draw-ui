# Draw UI

Draw UI is an application providing people the ability to create drawings & share them with a public space. The tech stack this application uses consists of React, MongoDB (atlas hosted), Material UI, NodeJS / Express. This application needs the draw-ui NodeJS server to run. You can find that code [here](https://github.com/bnthecode/draw-api)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all dependies.


## Installation and start-up
```bash
cd draw-ui
npm install
npm start
```


## Repository overview

```javascript
folder structure
--src
   ---pages  (main page views)
        - Create
        - Gallery
        - Login
   ---containers  (helpful wrappers for smaller components)
   ---http        (http handlers / config for rest endpoints)
   ---utilities   (global utility functions used across application)
```

## Helpful hints

```javascript
config.js - holds global configurations for application
http-configurations.js - holds useful configuration for methods http / api
```

## Other useful scripts

[Prettier](https://www.npmjs.com/package/prettier)

```bash
npm run lint:fix
```

## unfinished items

-- features
Replaying ability for drawings is not available - could not find a straightforward solution that would not interfere with working project structure. Will revisit.

-- tech debt
theming through material ui is not complete, did not feel the need to use it just yet due to time contraints & complexity
some refactoring due to unknown outcomes for html canvas
css updates, replicated code
reuse of components not very suitable / also some small replications that should be addressed.
