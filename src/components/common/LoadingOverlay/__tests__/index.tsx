import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LoadingOverlay from '~/components/common/LoadingOverlay';

describe('LoadingOverlay Component', () => {
  it('should render without issues', () => {
    const component = shallow(<LoadingOverlay />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
