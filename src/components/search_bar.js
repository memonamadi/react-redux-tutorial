import React, { Component } from 'react';
// Class based component using es6 class
// that extends to the React.Component functionality
class SearchBar extends Component {
  // All js classes have a function called constructor
  // Constructor is called automatically whenever a new instance of the class is created
  // Constructor is used to initialize states in class based component
  constructor(props) {
    super(props);
    // this.state initializes the state
    // this property records changes in the input
    this.state = { term: '' };
  }
  //
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange ={event => this.setState({ term: event.target.value})} />
      </div>
    )
  }
}

// To allow other .js files to access our SearchBar component
// we add this line to allow the export
export default SearchBar;
