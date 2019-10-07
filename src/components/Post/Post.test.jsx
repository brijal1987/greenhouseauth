import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Post from './Post';

configure({adapter: new Adapter()});

describe('Post component', () => {
  it('renders without crashing', () => {
    shallow(<Post />);
  });
});
