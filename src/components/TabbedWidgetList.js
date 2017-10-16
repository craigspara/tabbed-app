import React, { Component } from 'react';
import TabbedWidget from './TabbedWidget';

class TabbedWidgetList extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.store.data.Widgets).map(tabbedWidget =>
          <TabbedWidget
            key={tabbedWidget.id}
            tabbedWidget={tabbedWidget}
            store={this.props.store}
          />
        )}
      </div>
    );
  }
}

export default TabbedWidgetList;
