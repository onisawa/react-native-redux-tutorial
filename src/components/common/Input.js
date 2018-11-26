import React from 'react';
import { View, Text, TextInput } from 'react-native';

import color from '../../constant/color.json';

const Input = ({ label, placeholder, value, onChangeText, isSecure }) => {
  const { labelStyle, inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    color: color.text,
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: color.text,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    borderColor: color.borderColor,
    borderRadius: 5,
    borderWidth: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'  
  }
};

export { Input };
