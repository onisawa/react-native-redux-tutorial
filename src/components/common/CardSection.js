import React from 'react';
import { View } from 'react-native';

import color from '../../constant/color.json';

const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: color.background,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: color.border,
    postion: 'relative'
  }
};

export { CardSection };
