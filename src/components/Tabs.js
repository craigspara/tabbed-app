import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.tabs).map(tab =>
          <Tab
            key={tab.id}
            tab={tab}
          />
        )}
      </div>
    );
  }
}

export default Tabs;
