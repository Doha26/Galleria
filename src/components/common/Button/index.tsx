import React from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import colors from '~/theming/colors';
import styles from '~/components/common/Button/styles';

const propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  tintColor: PropTypes.string,
  transparent: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  loading: false,
  disabled: false,
  transparent: false,
  color: colors.black,
  tintColor: colors.black,
  fontSize: 22,
};

const Button = ({
  text,
  color,
  loading,
  onPress,
  disabled,
  tintColor,
  transparent,
  fontSize,
}: {
  text: string;
  color: string;
  loading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  tintColor?: string;
  transparent?: boolean;
  fontSize?: number;
}) => {
  const {container} = styles;
  const buttonContainerStyle = [container];
  let buttonContent;

  if (loading) {
    buttonContent = (
      <ActivityIndicator
        color={colors.white}
        style={{marginVertical: Platform.OS === 'ios' ? 10 : 0}}
        size={Platform.OS === 'ios' ? 1 : 24}
      />
    );
  } else {
    buttonContent = (
      <Text
        color={tintColor}
        style={{textAlign: 'center', color: tintColor, fontSize, fontWeight: 'bold'}}>
        {text}
      </Text>
    );
  }

  if (disabled || loading) {
    // @ts-ignore
    buttonContainerStyle.push({backgroundColor: colors.darkgray});

    return (
      <TouchableWithoutFeedback>
        <View style={buttonContainerStyle}>{buttonContent}</View>
      </TouchableWithoutFeedback>
    );
  }

  if (!transparent) {
    // @ts-ignore
    buttonContainerStyle.push({backgroundColor: color});
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle} activeOpacity={0.7}>
      <View>{buttonContent}</View>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
