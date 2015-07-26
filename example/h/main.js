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

document.getElementById('content').appendChild(loop.target);
