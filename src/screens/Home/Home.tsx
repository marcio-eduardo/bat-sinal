import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import logo from '../../../assets/batLogo.png';

import { styles } from './Style';
import { BatButton } from '../../components/BatButton/BatBtn';

export function Home() {
  return (
    <View style={styles.container}>

      <Image source={logo} />
      <BatButton />
        
    </View>
  );
}