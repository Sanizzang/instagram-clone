import { React, Component } from 'react';
import Navbar from '../components/Navbar';

class ExplorePage extends Component {
  render() {
    return (
      <main>
        <Navbar activeMenu="Explore" />
        <div>
          <h1>Explore Page</h1>
          <p>This is the explore page</p>
        </div>
      </main>
    );
  }
}

export default ExplorePage;