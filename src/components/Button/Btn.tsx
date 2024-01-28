import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

import { styles } from './BtnStylles'; 

export const Btn = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {console.log('pressionado')}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#d3d3d3' : '#333',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={[
            styles.text, 
            {
              color: pressed ? '#333': '#d3d3d3', 
            }
          ]}>{pressed ? 'Enviado!' : 'Enviar'}</Text>
        )}
      </Pressable>     
    </View>
  );
};


