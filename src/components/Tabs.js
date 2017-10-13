import React, { Component } from 'react';
import Tab from './Tab';
import './Tabs.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tabbed-widget__nav-wrapper">
        <ul className="tabbed-widget__nav" role="tablist" >
          {Object.values(this.props.tabs).map(tab =>
            <Tab
              key={tab.id}
              tab={tab}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Tabs;
