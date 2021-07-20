# Kulukorvauslomake

This repository contains the app to generate expense reports for the scouting group Ruokolahden Erätoverit ry.

Currently, the app is designed to do everything on the frontend to be served as static files, because the costs should be zero. Therefore, the app doesn't contain any authentication, but just a simple blocker question to prevent the most stupid trolls... :) In the future, there'll be some more sophisticated method if some backend could be deployed for the project.


## Installation

You must have Node and npm installed. (Tested with Node v16)

Install with npm:
```
npm install
```

Run dev version on the port 3000:
```
npm run start
```

Create the production build:
```
npm run build
```
