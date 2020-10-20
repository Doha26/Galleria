import 'react-native';
import React from 'react';
import * as renderer from 'react-test-renderer';
import 'react-native-gesture-handler/jestSetup';
import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
