import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabbedWidget.css';
import Panels from './PanelList';
import Tabs from './TabList';

class TabbedWidget extends Component {
  constructor(props) {
    super(props);

    this.panels = this.props.store.getPanels(this.props.tabbedWidget.panels);
    this.tabs = this.props.store.getTabs(this.props.tabbedWidget.tabs);
    this.state = {
      activePanel: this.props.tabbedWidget.panels[0],
      activeTab: this.props.tabbedWidget.tabs[0],
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === 'BUTTON') {
      for (let panel of this.props.tabbedWidget.panels) {
        if (panel.id === evt.target.value) {
          this.setState({activePanel: panel});
          panel.isPanelExpanded = true;
        } else {
          panel.isPanelExpanded = false;
        }
      }
      for (let tab of this.props.tabbedWidget.tabs) {
        if (tab.id === evt.target.value) {
          this.setState({activeTab: tab});
          tab.ariaSelected = true;
        } else {
          tab.ariaSelected = false;
        }
      }
    }
  }

  render() {
    let heading = null;
    if (this.props.tabbedWidget.widgetHeading) {
      heading = <h2 className="tabbed-widget__heading">{this.props.tabbedWidget.widgetHeading}</h2>;
    }
    return (
      <div className="tabbed-widget__container">
        {heading}
        <section className="tabbed-widget tabbed-widget_horizontal tabbed-widget_1" role="application" onClick={this.handleTabClick}>
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
