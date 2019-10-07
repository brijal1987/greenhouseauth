import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Sidebar from './Sidebar';

configure({adapter: new Adapter()});

describe('Sidebar component', () => {
  it('renders without crashing', () => {
    shallow(<Sidebar />);
  });
});
