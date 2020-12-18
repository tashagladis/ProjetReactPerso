
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Detail from "./Screens/Detail"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";


import PrivateRoute from './Utils/PrivateRoute'


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Login" component={Login}>

          </Route>
          <Route path="/topics" component={Topics}>
        
          </Route>
          <PrivateRoute path="/" component={Home}>
          </PrivateRoute>
          <PrivateRoute path="/Detail/:id" component={Detail}>
          </PrivateRoute>
          
          <Redirect to="/Login"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}



function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {}
      <Switch>
        <PrivateRoute path={`${match.path}/:topicId`}>
          <Topic />
        </PrivateRoute>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
