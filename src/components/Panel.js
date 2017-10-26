import React from 'react';
import PropTypes from 'prop-types';

export const Panel = (props) => {
  let heading = null, body = null;
  if (props.panel.panelHeading) {
    heading = <h3 className="tabbed-widget__panel-heading">{props.panel.panelHeading}</h3>;
  }
  if (props.panel.panelBody) {
    body = <p className="tabbed-widget__panel-body">{props.panel.panelBody}</p>;
  }
  return (
    <div id={props.panel.id}
      className="tabbed-widget__panel"
      role="tabpanel"
      aria-labelledby={props.panel.labeledBy}
      aria-expanded={props.panel.isPanelExpanded}>
      {heading}
      {body}
    </div>
  );
};

Panel.propTypes = {
  panel: PropTypes.shape({
    labeledBy: PropTypes.string.isRequired,
    isPanelExpanded: PropTypes.bool.isRequired,
    panelHeading: PropTypes.any,
    panelBody: PropTypes.any,
  })
};

export default Panel;
