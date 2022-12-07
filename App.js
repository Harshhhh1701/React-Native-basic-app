import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import React, {useState} from 'react';
export default function App() {
  const[name,setName]=useState('Shaun');
  const[person,setPerson]=useState({name:'Mario',age:40})
  const[age,setAge]=useState('20');
  const clickHandler=()=>{
    setName('Harsh');
    setPerson({name:'Harsh',age:20})
    
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>
          Hello World
        </Text>
      </View>
      <View style={styles.body}>
        <Text >Lorem ipsum harsh sit amet</Text>
        <Text >Lorem ipsum harsh sit amet</Text>
        <Text >Lorem ipsum harsh sit amet</Text>
      </View> */}
      {/* <Text>My name is {name}</Text> */}




      <Text>His name is {name} and his age is {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',

  },
  buttonContainer:{
    marginTop:20
  }
});
