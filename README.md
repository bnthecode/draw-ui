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
config.js - holds global configurations for application<br></br>
http-configurations.js - holds useful configuration for methods http / api
```

## Other useful scripts

[Prettier](https://www.npmjs.com/package/prettier)

```bash
npm run lint:fix
```

## unfinished items

-- features listed on document <br></br>
extra credit <br></br>
Replaying ability for drawings is not available - could not find a straightforward solution that would not interfere with working project structure. Will revisit.
<br></br>
ability to draw with mobile was visited, did not get a working example. most of application is mobile friendly.
<br></br>
all other features on document work.

-- tech debt<br></br>
theming through material ui is not complete, did not feel the need to use it just yet due to time contraints & complexity<br></br>
some refactoring due to unknown outcomes for html canvas<br></br>
css updates, replicated code<br></br>
reuse of components not very suitable / also some small replications that should be addressed.<br></br>
can't currently edit title/description as of 5/31/22 but editing would be a seamless addition.<br></br>

-- bugs <br></br>
ability to edit an existing drawing works, but for some reason state updates cause the image to go back to original.<br></br>
only way to clear eraser is by selecting a new color, not desired<br></br>
console errors, only a couple that randomly appear
