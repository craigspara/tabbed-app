import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div id={this.props.panel.id}
        className="tabbed-widget__panel"
        role="tabpanel"
        aria-labelledby={this.props.panel.labeledBy}
        aria-expanded={this.props.panel.isPanelExpanded}>
        <p>{this.props.panel.panelHeading}</p>
        <h2>{this.props.panel.panelBody}</h2>
      </div>
    );
  }
}

export default Panel;
