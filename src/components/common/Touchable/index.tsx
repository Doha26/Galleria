import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';

const propTypes = {
  style: PropTypes.shape({}),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  style: null,
  onPress: () => null,
  onLongPress: () => null,
};

const Touchable = ({
  children,
  onPress,
  onLongPress,
  style,
}: {
  children: React.ReactNode;
  onPress: () => void;
  onLongPress: (event: GestureResponderEvent) => void;
  style: any;
}) => {
  return Platform.OS === 'android' && Platform.Version > 20 ? (
    <TouchableNativeFeedback onPress={() => setTimeout(onPress, 0)}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity
      delayLongPress={400}
      onLongPress={(event: GestureResponderEvent) => onLongPress(event)}
      activeOpacity={0.7}
      style={style}
      onPress={() => setTimeout(onPress, 0)}>
      {children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = propTypes;
Touchable.defaultProps = defaultProps;

export default Touchable;
