import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Loader from '~/components/common/Loader';

const LoadingOverlay = () => {
  return (
    <View style={styles.overlay}>
      <Loader />
    </View>
  );
};
export default LoadingOverlay;
