import 'babel-polyfill';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StateApi from '../state-api/StateApi';
import TabbedWidgetList from './TabbedWidgetList';

Enzyme.configure({ adapter: new Adapter() });
const data = {
  'tabbedWidgets': [
    {
      'id': 'tabbed-widget_1',
      'widgetHeading': 'Widget 1',
      'options': {
        'layout':'horizontal'
      },
      'filters': {
        'tab1':'TAG_1',
        'tab2':'TAG_2',
        'tab3':'TAG_3'
      },
      'panels': [
        {
          'id': 'tabbed-widget__tab-panel1',
          'panelHeading': 'Panel 1',
          'panelBody': 'Lorum ipsum sit dolar.',
          'labeledBy': 'tabbed-widget__tab1',
          'isPanelExpanded': true
        },
        {
          'id': 'tabbed-widget__tab-panel2',
          'panelHeading': 'Panel 2',
          'panelBody': 'Lorum ipsum sit dolar.',
          'labeledBy': 'tabbed-widget__tab2',
          'isPanelExpanded': false
        },
        {
          'id': 'tabbed-widget__tab-panel3',
          'panelHeading': 'Panel 3',
          'panelBody': 'Lorum ipsum sit dolar.',
          'labeledBy': 'tabbed-widget__tab3',
          'isPanelExpanded': false
        }
      ],
      'tabs': [
        {
          'id': 'tabbed-widget__tab1',
          'tabLabel': 'Test Tab 1',
          'ariaControls': 'tabbed-widget__tab-panel1',
          'ariaSelected': true
        },
        {
          'id': 'tabbed-widget__tab2',
          'tabLabel': 'Test Tab 2',
          'ariaControls': 'tabbed-widget__tab-panel2',
          'ariaSelected': false
        },
        {
          'id': 'tabbed-widget__tab3',
          'tabLabel': 'Test Tab 3',
          'ariaControls': 'tabbed-widget__tab-panel3',
          'ariaSelected': false
        }
      ]
    },
  ]
};
const store = new StateApi(data);

const tabbedWidgets = store.data.Widgets;

describe('TabbedWidgetList', () => {
  const wrapper = shallow(<TabbedWidgetList tabbedWidgets={tabbedWidgets} store={store} />);

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });
});