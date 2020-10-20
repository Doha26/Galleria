import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '~/components/common/Text/Text';

describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have text as children', () => {
    const component = shallow(<Text>Children Text</Text>);

    expect(component.props().children).toBe('Children Text');
  });

  it('should apply style prop as an array', () => {
    const component = shallow(<Text style={[{color: 'red'}, {fontSize: 30}]}>Children Text</Text>);
    expect(component.props().style).toEqual({
      color: 'red',
      fontSize: 30,
    });
  });
});
