import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Loader from '~/components/common/Loader';

describe('Loader Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Loader />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
