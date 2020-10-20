// import React from "react";

import React from 'react';

jest.mock('react-native-safe-area-view', () => {
  return function MockSafeAreaView(props: any) {
    const {children, ...otherProps} = props;
    return React.createElement('SafeAreaView', otherProps, children);
  };
});
