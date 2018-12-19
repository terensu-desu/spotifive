/* global describe, it, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../containers/App';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(shallow(<App />).find('div').length).toEqual(1);
    ReactDOM.unmountComponentAtNode(div);
  });
});
