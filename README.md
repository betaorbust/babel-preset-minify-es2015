babel-preset-minify-es2015
==========================
[![NPM Version](https://badge.fury.io/js/babel-preset-minify-es2015.svg)](https://badge.fury.io/js/babel-preset-minify-es2015)
[![Dependency Status](https://david-dm.org/betaorbust/babel-preset-minify-es2015/status.svg)](https://david-dm.org/betaorbust/babel-preset-minify-es2015/status.svg)
[![Dev Dependency Status](https://david-dm.org/betaorbust/babel-preset-minify-es2015/dev-status.svg)](https://david-dm.org/betaorbust/babel-preset-minify-es2015/dev-status.svg)


Minifty ES2015 code without needing transpilation to ES5.

## Install

```sh
$ npm install --save-dev babel-preset-minify-es2015
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["minify-es2015"]
}
```

### Via CLI

```sh
$ babel script.js --presets minify-es2015 
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['minify-es2015']
});
```
