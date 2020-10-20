import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import LazyImage from '~/components/LazyImage';

jest.useFakeTimers();

describe('Lazy Image Component', () => {
  beforeAll(() => {
    // useNativeDriver isn't available in jest, so just silencing the warning
    global.console.warn = () => null;
  });

  it('should render on ios', () => {
    // @ts-ignore
    const component = shallow(<LazyImage source={{uri: 'https://i.imgur.com/0y8Ftya.jpg'}} />);

    // @ts-ignore
    component.instance().onLoadEnd();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render on android', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
      Version: 25,
      select(obj: any) {
        return obj.android;
      },
    }));

    // @ts-ignore
    const component = shallow(
      <LazyImage
        style={}
        width={200}
        height={200}
        source={{uri: 'https://i.imgur.com/0y8Ftya.jpg'}}
      />,
    );

    // @ts-ignore
    component.instance().onLoadEnd();
    jest.runOnlyPendingTimers();

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
