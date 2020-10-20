import React from 'react';
import {shallow} from 'enzyme';

import toJson from 'enzyme-to-json';
import Touchable from '~/components/common/Touchable';
import Icon from '~/components/common/Icon';
import colors from '~/theming/colors';

describe('Loader Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <Touchable onPress={() => null} onLongPress={() => null}>
        <Icon
          name="refresh"
          type="material-community"
          color={colors.white}
          clickable
          size={24}
          onPress={() => null}
        />
      </Touchable>,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
