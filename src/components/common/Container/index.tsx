import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from '~/theming/colors';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onScroll: PropTypes.func,
  transparency: PropTypes.bool,
  withSafeArea: PropTypes.bool,
  withScroll: PropTypes.bool,
};

const defaultProps = {};

const renderContent = (
  withSafeArea: boolean | undefined,
  children: React.ReactNode,
  onScroll: ((offset: number) => null) | undefined,
  withScroll: boolean | undefined,
) => {
  if (withScroll) {
    if (withSafeArea) {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.transparent}}>
          <ScrollView
            scrollEventThrottle={1}
            onScroll={({nativeEvent}) => (onScroll ? onScroll(nativeEvent.contentOffset.y) : null)}
            style={{flex: 1}}>
            {children}
          </ScrollView>
        </SafeAreaView>
      );
    }
    return (
      <ScrollView
        scrollEventThrottle={1}
        onScroll={({nativeEvent}) => (onScroll ? onScroll(nativeEvent.contentOffset.y) : null)}
        style={{flex: 1}}>
        {children}
      </ScrollView>
    );
  }
  return <View style={{flex: 1}}>{children}</View>;
};
const Container = ({
  onScroll,
  children,
  withSafeArea,
  withScroll,
}: {
  onScroll?: (offset: number) => null;
  children?: React.ReactNode;
  transparency?: boolean;
  withSafeArea?: boolean;
  withScroll?: boolean;
}) => {
  return renderContent(withSafeArea, children, onScroll, withScroll);
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
