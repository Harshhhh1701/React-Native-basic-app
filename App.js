import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import React, {useState} from 'react';
export default function App() {
  // const[name,setName]=useState('Shaun');
  // const[person,setPerson]=useState({name:'Mario',age:40})
  // const[age,setAge]=useState('20');
  // // const clickHandler=()=>{
  // //   setName('Harsh');
  // //   setPerson({name:'Harsh',age:20})
    
  // // }
  // return (
  //   <View style={styles.container}>
  //     {/* <View style={styles.header}>
  //       <Text style={styles.boldText}>
  //         Hello World
  //       </Text>
  //     </View>
  //     <View style={styles.body}>
  //       <Text >Lorem ipsum harsh sit amet</Text>
  //       <Text >Lorem ipsum harsh sit amet</Text>
  //       <Text >Lorem ipsum harsh sit amet</Text>
  //     </View> */}
  //     {/* <Text>My name is {name}</Text> */}



  //     <Text>Enter name:</Text>
  //     <TextInput 
  //       style={styles.input} 
  //       placeholder='e.g John Doe'
  //       onChangeText={(val)=>setName(val)}
  //       />
  //       <Text>Enter age:</Text>
  //     <TextInput 
  //     keyboardType='numeric'
  //       style={styles.input} 
  //       placeholder='e.g 20'
  //       onChangeText={(val)=>setAge(val)}
  //       />
  //     <Text>His name is {name} and his age is {age}</Text>
  //     {/* <View style={styles.buttonContainer}>
  //       <Button title='update state' onPress={clickHandler}/>

  //     </View> */}
  //   </View>
  // );



  const[people,setPeople]=useState([
    {name:'a',key:'1'},
    {name:'s',key:'2'},
    {name:'d',key:'3'},
    {name:'f',key:'4'},
    {name:'g',key:'5'},
    {name:'v',key:'6'},
    {name:'b',key:'7'},

  ]);

   return(
    <View style={styles.container}>
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:5,
    margin:10,
    width:200,

  }
});
