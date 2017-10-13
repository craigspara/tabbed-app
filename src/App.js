import React, { Component } from 'react';
import './App.css';

import TabbedWidgetList from './components/TabbedWidgetList';
import StateApi from './state-api/StateApi';
import {data} from './data';

const api = new StateApi(data);

// console.log(StateApi);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabbedWidgets: api.getWidgets(),
    };
    // console.log(api);
    // console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React based Tabbed widget</h1>
        </header>
        <p className="App-intro">A Tabbed widget built in React.</p>

        <TabbedWidgetList
          tabbedWidgets={this.state.tabbedWidgets}
          api={api}
        />
      </div>
    );
  }
}

export default App;
