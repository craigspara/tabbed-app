import React, { Component } from 'react';

class Tab extends Component {
  render() {
    return (
      <li id={this.props.tab.id}
        className="tabbed-widget__tab"
        role="tab"
        aria-controls={this.props.tab.ariaControls}
        aria-selected={this.props.tab.ariaSelected}
        tabIndex="0"
        data-tabbed-widget-filter="TAG_1">
        <a href="#"
          className="tabbed-widget__tab-link">{this.props.tab.tabLabel}</a>
      </li>
    );
  }
}


export default Tab;
