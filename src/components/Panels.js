import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import './Panels.css';

const Panels = (props) => {
  return (
    <div className="tabbed-widget__panel-wrapper">
      {Object.values(props.panels).map(panel =>
        <Panel
          key={panel.id}
          panel={panel}
        />
      )}
    </div>
  );
};

Panels.propTypes = {
  panels: PropTypes.object.isRequired,
};

export default Panels;
