import React, { Component } from 'react';
import Panel from './Panel';
import './Panels.css';

class Panels extends Component {
  
  render() {
    return (
      <div className="tabbed-widget__panel-wrapper">
        {Object.values(this.props.panels).map(panel =>
          <Panel
            key={panel.id}
            panel={panel}
          />
        )}
      </div>
    );
  }
}

export default Panels;
