import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabbedWidget.css';
import Panels from './Panels';
import Tabs from './Tabs';

class TabbedWidget extends Component {
  constructor(props) {
    super(props);
    this.panels = this.props.store.getPanels(this.props.tabbedWidget.panels);
    this.tabs = this.props.store.getTabs(this.props.tabbedWidget.tabs);
  }
  render() {
    let heading = null;
    if (this.props.tabbedWidget.widgetHeading) {
      heading = <h2 className="tabbed-widget__heading">{this.props.tabbedWidget.widgetHeading}</h2>;
    }
    return (
      <div className="tabbed-widget__container">
        {heading}
        <section className="tabbed-widget tabbed-widget_horizontal tabbed-widget_1" role="application">
          <div className="tabbed-widget__inner-wrapper">
            <Panels panels={this.panels} />
            <Tabs tabs={this.tabs} />
          </div>
        </section>
      </div>
    );
  }
}

TabbedWidget.propTypes = {
  store: PropTypes.shape({
    getPanels: PropTypes.func.isRequired,
    getTabs: PropTypes.func.isRequired,
  }),
  tabbedWidget: PropTypes.shape({
    panels: PropTypes.array.isRequired,
    tabs: PropTypes.array.isRequired,
    widgetHeading: PropTypes.string,
  }),
  filters: PropTypes.objectOf(PropTypes.string),
  options: PropTypes.objectOf(PropTypes.string),
};

export default TabbedWidget;
