import React from 'react';
import './App.css';
import DisplayQuotes from "./components/DisplayQuotes"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonquote: null,
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get("https://quests.wilders.dev/simpsons-quotes/quotes")
    .then(response => response.data)
    .then(data => {
      this.setState({
        simpsonquote: data[0],
      });
    });
  }
render() {
  console.log(this.state.simpsonquote)
  return (
    <div className="app">
    {this.state.simpsonquote ? <DisplayQuotes simpsonquote={this.state.simpsonquote} /> : null} 
    <button type="button" onClick={this.getQuote}>Get quote</button>     
    </div>
  )
}
}

export default App;
