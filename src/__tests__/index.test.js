import React from 'react';
import App from '../App';

import Enzyme, { shallow } from 'enzyme';

import StateApi from '../state-api/StateApi';
import { data } from '../data';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = new StateApi(data);

describe('index', () => {
  const wrapper = shallow(<App store={store} />);
  it('can initialize a new instance of StateApi', () => {
    expect(store).toBeDefined();
    expect(store).toBeInstanceOf(StateApi);
  });

  it('renders App properly', () => {
    // console.info(wrapper.instance());
    expect(wrapper).toMatchSnapshot();
  });

});