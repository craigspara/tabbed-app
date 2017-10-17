import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import TabbedWidgetList from './components/TabbedWidgetList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }

  render() {
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

App.propTypes = {
  store: PropTypes.shape({
    data: PropTypes.object.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};

export default App;
