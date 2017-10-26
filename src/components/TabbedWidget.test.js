import 'babel-polyfill';
import React from 'react';
import Enzyme, {mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StateApi from '../state-api/StateApi';
import {TabbedWidget} from './TabbedWidget';

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
    /*{
      'id': 'tabbed-widget_2',
      'widgetHeading': 'Widget 2',
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
          'tabLabel': 'Tab 1',
          'ariaControls': 'tabbed-widget__tab-panel1',
          'ariaSelected': true
        },
        {
          'id': 'tabbed-widget__tab2',
          'tabLabel': 'Tab 2',
          'ariaControls': 'tabbed-widget__tab-panel2',
          'ariaSelected': false
        },
        {
          'id': 'tabbed-widget__tab3',
          'tabLabel': 'Tab 3',
          'ariaControls': 'tabbed-widget__tab-panel3',
          'ariaSelected': false
        }
      ]
    }*/
  ]
};

const store = new StateApi(data);
const widgetObj = store.data.Widgets['tabbed-widget_1'];

describe('TabbedWidget', () => {

  let props = {
    tabbedWidget: widgetObj,
    store: store,
  };

  describe('Click event handling', () => {

    // Set-up
    const wrapper = mount(<TabbedWidget tabbedWidget={props.tabbedWidget} store={store} />);

    const tabBeforeClick = wrapper.instance().state.tabs['tabbed-widget__tab2'].ariaSelected;

    const panelBeforeClick = wrapper.instance().state.panels['tabbed-widget__tab-panel2'].isPanelExpanded;

    it('component renders when mounted', () => {
      expect(wrapper.length).toBeGreaterThanOrEqual(1);
    });

    describe('Tab\'s ariaSelected value', () => {

      it('should be a boolean', () => {
        expect(typeof wrapper.instance().state.tabs['tabbed-widget__tab2'].ariaSelected).toMatch('boolean');
      });

      it('clicked tab toggles the \'ariaSelected\' boolean attribute value', () => {
        // Simulate click on second tab and redraw to ensure state update has completed
        wrapper.find('[value="tabbed-widget__tab-panel2"]').simulate('click');
        wrapper.update();

        const tabAfterClick = wrapper.instance().state.tabs['tabbed-widget__tab2'].ariaSelected;

        expect(tabAfterClick).not.toEqual(tabBeforeClick);
      });

      it('toggles the original clicked tab (second tab) back to the original value when the first tab is clicked', () => {
        // Simulate click on first tab and redraw to ensure state update has completed
        wrapper.find('[value="tabbed-widget__tab-panel1"]').simulate('click');
        wrapper.update();

        const newTabAfterClick = wrapper.instance().state.tabs['tabbed-widget__tab2'].ariaSelected;

        expect(newTabAfterClick).toEqual(tabBeforeClick);
      });

    });

    describe('Panel\'s isPanelExpanded value', () => {

      it('should be a boolean', () => {
        expect(typeof wrapper.instance().state.panels['tabbed-widget__tab-panel2'].isPanelExpanded).toMatch('boolean');
      });

      it('clicked tab toggles the panel\'s \'isPanelExpanded\' boolean attribute value', () => {

        // Simulate click on second tab and redraw to ensure state update has completed
        wrapper.find('[value="tabbed-widget__tab-panel2"]').simulate('click');
        wrapper.update();

        const panelAfterClick = wrapper.instance().state.panels['tabbed-widget__tab-panel2'].isPanelExpanded;

        expect(panelAfterClick).not.toEqual(panelBeforeClick);
      });

      it('toggles the original clicked tab\'s (second tab) panel back to the original value when the first tab is clicked', () => {
        // Simulate click on first tab and redraw to ensure state update has completed
        wrapper.find('[value="tabbed-widget__tab-panel1"]').simulate('click');
        wrapper.update();

        const newPanelAfterClick = wrapper.instance().state.panels['tabbed-widget__tab-panel2'].isPanelExpanded;

        expect(newPanelAfterClick).toEqual(panelBeforeClick);
      });

    });
  });

});