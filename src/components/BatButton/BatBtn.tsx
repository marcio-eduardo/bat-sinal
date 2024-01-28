import React from 'react';
import { View, Text, GestureResponderEvent, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './BatBtnStyles';


export function BatButton() {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Formulario');
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={openScreen}
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
          ]}>{pressed ? 'Ativar' : 'Ativar'}</Text>
        )}
      </Pressable>     
    </View>
  );
}


