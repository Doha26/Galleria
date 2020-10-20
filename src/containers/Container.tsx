import * as React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {padding} from '~/components/config/spacing';
import ViewPropTypes from '../components/config/ViewPropTypes';

const Container = ({
  style,
  children,
  ...rest
}: {
  disable: boolean;
  style: object;
  children: any;
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...rest}>
      {children}
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: padding.large,
  },
  right: {
    paddingRight: 0,
  },
  left: {
    paddingLeft: 0,
  },
  all: {
    paddingHorizontal: 0,
  },
};

Container.propTypes = {
  disable: PropTypes.bool,
  style: ViewPropTypes.style,
  children: PropTypes.node,
};
Container.defaultProps = {
  disable: false,
  style: {},
  children: null,
};

export default Container;
