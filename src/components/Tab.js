import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

const Tab = (props) => {
  return (
    <li id={props.tab.id}
      className="tabbed-widget__tab"
      role="tab"
      aria-controls={props.tab.ariaControls}
      aria-selected={props.tab.ariaSelected}
      tabIndex="0"
      data-tabbed-widget-filter="TAG_1">
      <button
        className="tabbed-widget__tab-link" type="button" value={props.tab.ariaControls}>{props.tab.tabLabel}</button>
    </li>
  );
};

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    ariaControls: PropTypes.string.isRequired,
    ariaSelected: PropTypes.bool.isRequired,
    tabLabel: PropTypes.any.isRequired,
  })
};

export default Tab;
