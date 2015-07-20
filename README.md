# My Front-End Boilerplate

Tired of setting up bootstrap, bower, sass, and browserify every time? Here ya go

## Getting it

Of course, you can do a normal `git clone` if you want. But you may want to just download the boilerplate and not keep all of the commit history and branches for this project. It is likely that you will want the boilerplate to start a **new** git project. There are many ways to do this, but here is my favorite:

```bash
git clone git@github.com:mattdodge/front-end-boilerplate <project_name>
cd <project_name>
rm -rf .git
git init
```

## Setting it up

After getting it...

```bash
npm install
bower install
```

## Building it

After setting it up...

### CSS

Make your SASS/SCSS changes in the sass folder. Gulp will build from the `sass/style.scss` file and put the resulting file in `build/style.css`. This output style file will contain the bootstrap CSS by default.

### JS

Make your JavaScript changes in the js folder. Gulp will build from the `js/main.js` file and you can use browserify to `require` other JS files. The resulting JS file will be placed in `build/script.js` and will contain the bootstrap JavaScript by default.
