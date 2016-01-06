import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCgyP7sQ_idV1mCVuBEJiwc43Xn8cx8hT8';

// arrow is the ES6 way to declare a function
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
