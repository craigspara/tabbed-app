import React, { Component } from 'react';
import Panel from './Panel';

class Panels extends Component {
  
  render() {
    return (
      <div>
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
