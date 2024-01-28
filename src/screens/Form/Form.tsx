import React from 'react';
import { View, ScrollView, Image, Text, TextInput, SafeAreaView } from 'react-native';

import { styles } from './FormStyles';
import logo from '../../../assets/batLogo02.png';
import { BatButtonAcept } from '../../components/BatBtnAcept/BatBtnAcept';
import { Btn } from '../../components/Button/Btn';


export function Form() {
  return (
    
    <ScrollView>
      <View>
        <Image 
          style={styles.image}
          source={logo} 
        />

        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Digite seu nome'
          maxLength={30}
        />
        
        <Text style={styles.text}>E-Mail</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Digite seu email'
          maxLength={30}
        />

        <Text style={styles.text}>Endereço</Text>
        <TextInput
          style={[styles.textInput, {height: 100}]}
          maxLength={40}
          placeholder={'Digite seu endereço completo'}
        />

        <Text style={styles.text}>Solicitação</Text>
        <TextInput
          style={[styles.textInput, {height: 200}]}
          placeholder='Qual a sua solicitação?'
          maxLength={30}
        />
      </View>

      <View style={styles.btnStyle}>
        <BatButtonAcept />
      </View>      
    </ScrollView>      
    
  );
}