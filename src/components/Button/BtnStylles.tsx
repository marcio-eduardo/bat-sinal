import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    borderRadius: 5,   
  },

  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 26,    
    fontWeight: 'bold',
    width: 150,
    height: 50       
  },
  
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,    
  }  
});