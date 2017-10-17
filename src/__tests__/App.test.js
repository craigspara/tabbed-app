import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';

import Enzyme, { shallow } from 'enzyme';

import StateApi from '../state-api/StateApi';
import { data } from '../data';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = new StateApi(data);
const state = store.getState();

const testProps = {
  tabbedWidgets: {
    a: { id: 'a' },
    b: { id: 'b' },
  },
};

describe('App', () => {

  it('Can get widgets', () => {
    // console.info(store);
    expect(store.getState()).toBeDefined();
  });

  /*it('renders correctly', () => {
    const wrapper = shallow(
      <App
        {...testProps}
      />
    );

    expect(wrapper.find('Widgets').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });*/

});