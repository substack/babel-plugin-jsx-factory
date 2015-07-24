# babel-plugin-jsx-factory

Use `jsx` with a factory function `h` matching this signature:

``` js
h(tagName, attributes, children)
```

For a string `tagName`, `attributes` object, and an array of `children`.

# browserify example

Write some code with inline jsx and a virtual dom factory function, in our case
`h`:

```
var h = require('virtual-dom/h');
var main = require('main-loop');
var loop = main({ n: 0 }, render, require('virtual-dom'));

function render (state) {
  return <div>
    <h1>clicked {String(state.n)} times</h1>
    <button onclick={onclick}>click me!</button>
  </div>

  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
```

Then make a package.json:

``` json
{
  "name": "whatever",
  "browserify": {
    "transform": [
      [ "babelify": { "jsxPragma": "h", "babel-plugin-jsx-factory" } ]
    ]
  },
  "dependencies": {
    "babelify": "^6.1.3",
    "babel-plugin-jsx-factory": "^1.0.0"
  }
}
```

# license

MIT
