import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';

describe('Icon Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <Icon
        color={colors.white}
        onPress={() => null}
        type="antdesign"
        clickable
        name="search"
        size={32}
      />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Icon props', () => {
    it('accepts name', () => {
      const component = shallow(<Icon name="refresh" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts color', () => {
      const component = shallow(<Icon name="refresh" color={colors.white} />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts type', () => {
      const component = shallow(<Icon name="refresh" color={colors.white} type="material-community" />);
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts clickable', () => {
      const component = shallow(
        <Icon name="refresh" color={colors.white} type="material-community" clickable />,
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('accepts size', () => {
      const component = shallow(
        <Icon name="refresh" color={colors.white} type="material-community" clickable size={32} />,
      );
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('renders touchable if clickable given', () => {
      const component = shallow(
        <Icon name="refresh" color={colors.white} type="material-community" clickable size={32} />,
      );
      expect(component.find(Touchable)).toBeTruthy();
      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
