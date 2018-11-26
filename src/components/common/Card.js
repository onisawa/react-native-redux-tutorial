import React from 'react';
import { View } from 'react-native';

import color from '../../constant/color.json';

const Card = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: color.border,
    borderBottomWidth: 0,
    // ios
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // android
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
