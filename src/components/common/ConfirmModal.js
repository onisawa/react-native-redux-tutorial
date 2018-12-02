import React from 'react';
import { Text, View, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

import t from '../../constant/text.json';

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
      transparent
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        
        <CardSection>
          <Button onPress={onAccept}>{t.yes_confirm_btn}</Button>
          <Button onPress={onDecline}>{t.no_confirm_btn}</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { ConfirmModal };
