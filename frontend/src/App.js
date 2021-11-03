import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, LoginPage, RegisterPage, InboxPage, ExplorePage, ProfilePage, NotFoundPage } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/direct/inbox" component={InboxPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/:username" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
