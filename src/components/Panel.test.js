import 'babel-polyfill';
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

Enzyme.configure({ adapter: new Adapter() });

const panel = {
  'id': 'tabbed-widget__tab-panel1',
  'panelHeading': 'Panel 1',
  'panelBody': 'Lorum ipsum sit dolar.',
  'labeledBy': 'tabbed-widget__tab1',
  'isPanelExpanded': false
};

describe('Panel', () => {
  const wrapper = mount(<Panel panel={panel} />);

  it('should render', () => {
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  it('should have a heading property that\'s not null', () => {
    expect(wrapper.props().panel.panelHeading).toBeDefined();
    expect(wrapper.props().panel.panelHeading).not.toBeNull();
  });

  it('should have a body property', () => {
    expect(wrapper.props().panel.panelBody).toBeDefined();
    expect(wrapper.props().panel.panelBody).not.toBeNull();
  });
});