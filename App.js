import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from "react";

const App = () => {

  const[textInputValue, settextInputValue] = useState('');
  const[value, setvalue] = useState('');
  const saveValue = () => {
    if(textInputValue)
    {
      AsyncStorage.setItem('any_key_here',textInputValue);
      settextInputValue('');
      alert('Data Saved');
    }
    else
    {
      alert('Please fill data');
    }
  }

  const getValue = () => {

    AsyncStorage.getItem('any_key_here').then((value) => {
      setvalue(value);
    })
  }

  return(
    <SafeAreaView style = {{flex: 1}}>

      <View style = {styles.container}>
        <Text style = {styles.titleText}>
            AsyncStorage in React Native
        </Text>

        <TextInput placeholder='Enter Some Text here'
          value={textInputValue}
          onChangeText={(data) => settextInputValue(data)} 
          underlineColorAndroid='transparent'
          style={styles.textInputStyle}
          />

          <TouchableOpacity 

              onPress={saveValue}
          
             style={styles.buttonStyle}>

            <Text style={styles.buttonTextStyle}>
              Save Value
            </Text>

          </TouchableOpacity>

          <TouchableOpacity 

            onPress={getValue}
          
            style={styles.buttonStyle}>

            <Text style={styles.buttonTextStyle}>
              Get Value
              </Text>

          </TouchableOpacity>

          <Text style={styles.textSyle}>

            {value}
          </Text>

      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20
   },

   textInputStyle:{
     textAlign: 'center',
     height: 40,
     width: '100%',
     borderWidth: 1,
     borderColor: 'blue',
     fontSize: 22
    },
    buttonStyle:{
        fontSize: 16,
        color: 'white',
        backgroundColor: 'blue',
        padding: 5,
        marginTop: 10,
        minWidth: 250,
        height: 60,
        justifyContent: 'center'
    },
    buttonTextStyle:{
      padding: 5,
      color: 'white',
      textAlign: 'center',
      fontSize: 22
    },
    textSyle:{
      padding: 10,
      textAlign: 'center',
      fontSize: 22
    }


});

export default App;