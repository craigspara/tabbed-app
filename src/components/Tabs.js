import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import './Tabs.css';

const Tabs = (props) => {
  return (
    <div className="tabbed-widget__nav-wrapper">
      <ul className="tabbed-widget__nav" role="tablist" >
        {Object.values(props.tabs).map(tab =>
          <Tab
            key={tab.id}
            tab={tab}
          />
        )}
      </ul>
    </div>
  );
};

Tabs.PropTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default Tabs;
