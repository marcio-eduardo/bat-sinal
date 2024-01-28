import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { styles } from './Style';
import { BatButton } from '../../components/BatButton/BatBtn';

import logo from '../../../assets/batLogo.png';

export function Home() {
  
  return (
    <View style={styles.container}>
       
        <Image 
          source={logo}
        />
      

      <BatButton />
               
    </View>
  );
}