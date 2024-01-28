import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  view: { 
    flex: 1, 
    paddingTop: 50,
    paddingBottom: 50,       
    alignItems: 'center',
    justifyContent: 'space-evenly',   
  },

  textInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
    width: 350,
    padding: 5,
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 10,
    borderWidth: 1,
    alignSelf: 'flex-start',
           
  },
  text: {
    marginLeft: 25,       
    alignSelf: 'flex-start',   
  },
  image: {
    marginTop: 35,
    alignSelf: 'flex-start'      
  },
  btnStyle: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center'
  }
});