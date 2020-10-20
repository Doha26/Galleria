import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Container from '~/components/common/Container';

describe('Container Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Container withScroll />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
