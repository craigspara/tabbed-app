import React, { Component } from 'react';
import './App.css';

import TabbedWidgetList from './components/TabbedWidgetList';
// import StateApi from './state-api/StateApi';

// console.log(StateApi);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }

  render() {
    // console.log(props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React based Tabbed widget</h1>
        </header>
        <p className="App-intro">A Tabbed widget built in React.</p>

        <TabbedWidgetList
          tabbedWidgets={this.state.Widgets}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
