import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, LoginPage, SignUpPage, PasswordResetPage, ProfileEditPage, InboxPage, ExplorePage, ProfilePage } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/accounts/login" component={LoginPage} />
          <Route path="/accounts/emailsignup" component={SignUpPage} />
          <Route path="/accounts/password/reset" component={PasswordResetPage} />
          <Route path="/accounts/edit" component={ProfileEditPage} />
          <Route path="/direct/inbox" component={InboxPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/:username" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
