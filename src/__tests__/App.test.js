import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';

import Enzyme, { shallow } from 'enzyme';

import StateApi from '../state-api/StateApi';
import { data } from '../data';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const api = new StateApi(data);


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

const testProps = {
  tabbedWidgets: {
    a: { id: 'a' },
    b: { id: 'b' },
  },
};

describe('App', () => {

  it('can access the GetWidget method through api', () => {
    expect(api).toHaveProperty('getWidgets');
  });

  it('Can get widgets', () => {
    expect(api.getWidgets()).toBeDefined();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <App
        {...testProps}
      />
    );

    expect(wrapper.find('TabbedWidgetList').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

});
