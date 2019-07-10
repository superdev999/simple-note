# Simple Note - Frontend
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)

## Getting Started
### Dependencies
1. Create React App
2. Redux
3. DraftJS

### How to run
1. Install yarn: `npm install -g yarn`

2. Install dependencies: `yarn`

3. Start server: `yarn start`


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  components/
    blockStyles/
      BlockStyles.js
      HeadingStyleDropDown.js
      StyleButton.js
    entities/
      addImage.js
      mediaBlockRenderer.js
    inlineStyles/
      InlineStyles.js
    noteList/
      NoteListContainer.js
      NoteListItem.js
    plugins/
      addLinkPlugin.js
      basicTextStylePlugin.js
      highlightPlugin.js
    PageContainer.js
  actions/
    index.js
  reducers/
    index.js
  public/
    index.html
    favicon.ico
  src/
    App.scss
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and SCSS/CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Compile `scss`files into `css`files in `src`folder.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Simple Note - Backend
This project is simple express-node-mongoose project to manage notes.
## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)

## Getting Started
### Dependencies
1. Express
2. Mongodb-Mongoose

### How to run
1. Install dependencies: `npm install`

2. Start server: `npm run start`

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  app.js
  models/
    notes.js
```