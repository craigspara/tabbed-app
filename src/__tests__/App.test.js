import React from 'react';
import App from '../App';

import Enzyme, { shallow } from 'enzyme';

import StateApi from '../state-api/StateApi';
import { data } from '../data';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = new StateApi(data);
const state = store.getState();


describe('App', () => {
  const wrapper = shallow(<App store={store}/>);

  it('Can get widgets', () => {
    // console.info(store);
    expect(store.getState()).toBeDefined();
    expect(wrapper.instance().props.store).toBeInstanceOf(StateApi);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has state', () => {
    // console.info(wrapper.instance().state);
    expect(wrapper.instance().state).toBeDefined();
  });

});