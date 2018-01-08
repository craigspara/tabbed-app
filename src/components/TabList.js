import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import './TabList.css';

const TabList = (props) => {
  return (
    <div className="tabbed-widget__nav-wrapper">
      <ul className="tabbed-widget__nav" role="tablist" onClick={(e) => {props.handleTabClick(e);}}>
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

TabList.PropTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default TabList;
