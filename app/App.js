import React, {Component} from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory}
        from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home} />
  	      <Route path="/address" component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path="instagram" component={Instagram} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/namedComponent" component={NamedComponents}>
            <IndexRoute components={{title: Title, subTitle: SubTitle}} />
          </Route>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Home = () => <h1>hello from home!</h1>
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>
const Address = (props) => <div>
  <br />
  <Link to="/address">Twitter Feed</Link>&nbsp;
  <Link to="/address/Instagram">Instagram Feed</Link>
  <h1>we are loacted at 555 Jackson St.</h1>
  {props.children}
</div>
const About = ()  => <h1>About Page</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
);
const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/">Home</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/address">Address</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/about">About</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/namedComponent">NamedComponents</IndexLink>
  </div>
);
const Title = () => (
  <h1>Hello from Title Component</h1>
);
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
);
const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

export default App;
