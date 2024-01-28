import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './BatBtnStyles';

export function BatButton() {
  return (
    <View >
      <Text 
        onPress={() => {console.log('Abrindo segunda tela')}} 
        style={styles.button}>
        Activate Bat Signal
      </Text>
    </View>
  );
}