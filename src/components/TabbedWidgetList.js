import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            options={tabbedWidget.options}
            filters={tabbedWidget.filters}
          />
        )}
      </div>
    );
  }
}

TabbedWidgetList.propTypes = {
  store: PropTypes.shape({
    data: PropTypes.shape({
      Widgets: PropTypes.object.isRequired,
    }),
  })
};

export default TabbedWidgetList;
