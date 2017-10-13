import React, { Component } from 'react';
import TabbedWidget from './TabbedWidget';

class TabbedWidgetList extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.tabbedWidgets).map(tabbedWidget =>
          <TabbedWidget
            key={tabbedWidget.id}
            tabbedWidget={tabbedWidget}
            api={this.props.api}
          />
        )}
      </div>
    );
  }
}

export default TabbedWidgetList;
