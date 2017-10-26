import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabbedWidget.css';
import Panels from './PanelList';
import Tabs from './TabList';

export class TabbedWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: this.props.store.getPanels(this.props.tabbedWidget.panels),
      tabs: this.props.store.getTabs(this.props.tabbedWidget.tabs),
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(evt) {
    evt.preventDefault();
    evt.persist();
    // console.info(evt.target);
    if (evt.target.nodeName === 'BUTTON') {

      this.setState((prevState) => {

        // Iterate through prevState's panels and return an array of updated panels
        let updatedPanels = Object.values(prevState.panels).map((panel) => {
          const {id, isPanelExpanded} = panel;
          const updatedPanel = {...prevState.panels[id], [id]: isPanelExpanded};

          updatedPanel.isPanelExpanded = (id === evt.target.value);

          return updatedPanel;
        });

        // Iterate through prevState's tabs and return an array of updated tabs
        let updatedTabs = Object.values(prevState.tabs).map((tab) => {
          const {id, ariaSelected, ariaControls} = tab;
          const updatedTab = {...prevState.tabs[id], [id]: ariaSelected};

          updatedTab.ariaSelected = (ariaControls === evt.target.value);

          return updatedTab;
        });

        return {
          panels: this.props.store.getPanels(updatedPanels),
          tabs: this.props.store.getTabs(updatedTabs),
        };
      });
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
        <section className="tabbed-widget tabbed-widget_horizontal tabbed-widget_1" role="application">
          <div className="tabbed-widget__inner-wrapper">
            <Panels panels={this.state.panels}/>
            <Tabs tabs={this.state.tabs} handleTabClick={this.handleTabClick}/>
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
