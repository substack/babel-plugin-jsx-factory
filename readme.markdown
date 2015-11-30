# babel-plugin-jsx-factory

Use `jsx` with a factory function `h` matching this signature:

``` js
h(tagName, attributes, children)
```

For a string `tagName`, `attributes` object, and an array of `children`.

# browserify virtual-dom example

Write some code with inline jsx and a virtual dom factory function, in our case
`h`:

```js
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

```json
{
  "name": "whatever",
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "jsxPragma": "h",
          "plugins": [ "babel-plugin-jsx-factory" ]
        }
      ]
    ]
  },
  "dependencies": {
    "babelify": "^6.1.3",
    "babel-plugin-jsx-factory": "^1.0.0",
    "main-loop": "^3.1.0",
    "virtual-dom": "^2.0.1"
  }
}
```

To build:

```
$ browserify main.js > public/bundle.js
```

# browserify react example

```js
var React = require('react')
var App = React.createClass({
  getInitialState: function () { return { n: 0 } },
  render: function () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick}>click me!</button>
    </div>
  },
  handleClick: function () {
    this.setState({ n: this.state.n + 1 })
  }
})
React.render(<App />, document.querySelector('#content'))
```

Then make a package.json:

``` json
{
  "name": "whatever",
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "jsxPragma": "React.createElement",
          "plugins": [ "babel-plugin-jsx-factory" ]
        }
      ]
    ]
  },
  "dependencies": {
    "babelify": "^6.1.3",
    "babel-plugin-jsx-factory": "^1.0.0",
    "react": "~0.13.3"
  }
}
```

To build:

```
$ browserify main.js > public/bundle.js
```

# license

MIT
