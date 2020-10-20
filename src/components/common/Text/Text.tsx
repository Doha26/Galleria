import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  large: PropTypes.bool,
  small: PropTypes.bool,
  numberOfLines: PropTypes.number,
  color: PropTypes.string,
  extraLarge: PropTypes.bool,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  color: null,
  style: null,
  small: false,
  large: false,
  numberOfLines: 2,
  extraLarge: false,
  children: null,
  theme: null,
};

const Text = ({
  color,
  large,
  small,
  numberOfLines,
  theme,
  style,
  children,
  extraLarge,
  ...props
}: {
  color?: string;
  large?: boolean;
  small?: boolean;
  numberOfLines?: number;
  theme?: any;
  style: any;
  children: string | number | undefined;
  extraLarge?: boolean;
}) => {
  const textStyle = [{color: color ? color || theme.secondaryColor : null, fontSize: 18}];

  if (small) {
    textStyle.push({color: undefined, fontSize: 16});
  } else if (large) {
    textStyle.push({color: undefined, fontSize: 22});
  } else if (extraLarge) {
    textStyle.push({color: undefined, fontSize: 30});
  }

  return (
    <RNText numberOfLines={numberOfLines} {...props} style={[textStyle, style]}>
      {children}
    </RNText>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
