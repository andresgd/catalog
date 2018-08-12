import React from 'react';
import ReactDOM from 'react-dom';
import Clients from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clients />, div);
  ReactDOM.unmountComponentAtNode(div);
});
