# React Starter Kit

Universal JavaScript build with Express, React v16, Webpack 4 and [React Router v4]. Makes use of CSS Modules.(https://reacttraining.com/react-router/).

Webpack to compile JavaScript, JSX and Sass.
* ESLint to lint JavaScript
* Babel Minify to compress JavaScript
* JavaScript compiles down to ES5, PostCSS and Autoprefixer compiles CSS for older browser compatibility
* HMR for development

## Instructions

1. Install dependencies: `npm install`
1. Compile client: `npm run compile`
1. Compile server: `npm run compile-server`
1. Run production / development environment
    * For production: `node server.js`
    * For development: `npm run dev` (comment out stylesheet link for HMR)
1. Visit: [http://localhost:3000](http://localhost:3000)

In a live server environment you may only want to install dependencies.
1. Install dependencies: `npm install --only=production`

### Production

Sass is compiled to autoprefixed and minified CSS. Javascript is linted and minified.

### Development

Webpack HMR live reloads JavaScript and CSS in the browser.

### N.B.

> To simplify the starter kit I haven't included an API intergration or meta titles and descriptions.
>
> For extending the starter kit to consume an API see this [data](https://github.com/mauricevancooten/react/tree/master/data) example.
>
> To extend the starter kit with meta titles and descriptions, see this [meta](https://github.com/mauricevancooten/react/tree/master/meta) example.

## Licence

Licensed under [MIT](https://opensource.org/licenses/MIT) licence.
