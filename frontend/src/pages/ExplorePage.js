import { React, Component } from 'react';
import Navbar from '../components/Navbar';

class ExplorePage extends Component {
  render() {
    return (
      <main>
        <Navbar activeMenu="Explore" />
        <div>
          <h1>탐색 페이지</h1>
          <p>아직 미구현된 페이지입니다.</p>
        </div>
      </main>
    );
  }
}

export default ExplorePage;