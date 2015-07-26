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
