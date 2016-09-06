import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory}
        from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
	<Route path="/address" component={Address} />
      </Router>
    );
  }
}

const Home = () => <h1>hello from home!</h1>
const Address = () => <h1>we are loacted at 555 Jackson St.</h1>

export default App;
