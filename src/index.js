import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// Youtube API key
const API_KEY = 'AIzaSyCgyP7sQ_idV1mCVuBEJiwc43Xn8cx8hT8';

// Arrow is the ES6 way to declare a function
// App renders the SearchBar component
class App extends Component {
  // When App first boots up
  // constructor runs right away
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    // and kicks off a YT search
    // then the callback function is called with list of videos
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // When key and value are exactly the same (like { videos: videos })
      // we can use the shortcut { videos } (es6 syntax)
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos= { this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
