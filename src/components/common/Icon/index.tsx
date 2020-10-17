import React from 'react';
import PropTypes from 'prop-types';
import getIconType from '~/components/helpers/getIconType';
import colors from '~/theming/colors';
import Touchable from '~/components/common/Touchable';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  clickable: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  color: colors.white,
  type: null,
  size: 35,
  clickable: false,
  onPress: () => null,
};

const Icon = ({
  name,
  type,
  color,
  size,
  clickable,
  onPress,
}: {
  name: string;
  type: string;
  color: string;
  clickable: boolean;
  size: number;
  onPress: () => void;
}) => {
  const IconComponent = getIconType(type);
  if (clickable) {
    return (
      <Touchable onPress={onPress}>
        <IconComponent name={name} color={color} type={type} size={size} />
      </Touchable>
    );
  }
  return <IconComponent name={name} color={color} type={type} size={size} />;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
