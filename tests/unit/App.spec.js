import { mount } from 'enzyme';
import React from 'react';
import { App } from '../../src/App';


describe('App component', () => {
  it('renders the message', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div').text()).toEqual('Hi there!!');
  });
});