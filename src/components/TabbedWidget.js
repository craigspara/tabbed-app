import React, { Component } from 'react';
import './TabbedWidget.css';
import Panels from './Panels';
import Tabs from './Tabs';

class TabbedWidget extends Component {
  constructor(props) {
    super(props);
    this.panels = this.props.api.getPanels(this.props.tabbedWidget.panels);
    this.tabs = this.props.api.getTabs(this.props.tabbedWidget.tabs);
    console.log(this.props.tabbedWidget.panels);
    // console.log(this.tabs);
  }
  render() {
    return (
      <div className="tabbed-widget__container">
        <h2 className="tabbed-widget__heading">{this.props.tabbedWidget.widgetHeading}</h2>
        <section className="tabbed-widget tabbed-widget_horizontal tabbed-widget_1" role="application" data-tabbed-widget-options='{"layout":"horizontal"}' data-tabbed-widget-filter-options='{"tab1":"TAG_1","tab2":"TAG_2","tab3":"TAG_3","tab4":"TAG_4","tab5":"TAG_5","tab6":"TAG_6","tab7":"TAG_7"}'

        >
          <div className="tabbed-widget__inner-wrapper">
            <Panels panels={this.panels} />
            <Tabs tabs={this.tabs} />
          </div>
        </section>
      </div>
    );
  }
}

export default TabbedWidget;
