import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from './components/home/Home'
import Users from "./components/users/Users";
import User from "./components/user/User";
import Posts from "./components/posts/Posts";

export default function App() {
  let [user, setUser] = useState({});
  return (
    <Router>
      <div className={"App"}>
        <header className={"header"}>
          <Link to={"/"}>
            <h1>hw3</h1>
          </Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/posts"}>Posts</Link>
        </header>
        <div className={"aside"}></div>
        <main className={"main"}></main>

        <Switch>
          <Route exact path={"/"}>
          </Route>
          <Route path={"/users"}>
        <div className={"aside"}>
            <Users setUser={setUser} />
            </div><main className={"main"}>
            <User item={user} /></main></Route>

          <Route path={"/posts"}>
            <main className={"main"}>
              <Posts />
            </main>
          </Route>
        </Switch>
        <footer className={"footer"}>Footer</footer>
      </div>
    </Router>
  );
}
