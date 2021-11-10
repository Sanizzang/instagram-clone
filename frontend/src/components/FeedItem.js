import { React, Component } from 'react';
import FeedItemHeader from './FeedItemHeader';

class FeedItem extends Component {
  render() {
    return (
      <article>
        <FeedItemHeader />
      </article>
    );
  }
}

export default FeedItem;