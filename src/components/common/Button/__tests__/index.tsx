import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '~/components/common/Button';
import colors from '~/theming/colors';

describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <Button text="Test Button" color={colors.black} onPress={() => {}} />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be call onPress events', () => {
    const onPress = jest.fn();
    console.log = jest.fn();
    const wrapper = shallow(<Button text="Test Button" color={colors.black} onPress={() => {}} />);

    // Call default onPress
    // @ts-ignore
    wrapper.find('TouchableOpacity').first().props().onPress();

    // @ts-ignore
    expect(console.log.mock.calls[0][0]).toBe(`Please attach a method to this component`);

    wrapper.setProps({onPress});

    // Call our custom onPress
    // @ts-ignore
    wrapper.find('TouchableOpacity').first().props().onPress();

    expect(onPress).toHaveBeenCalled();
  });
});
