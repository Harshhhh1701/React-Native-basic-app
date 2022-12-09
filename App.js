import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,FlatList, Alert } from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
export default function App() {
  const[todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'complete da',key:'2'},
    {text:'Create an app',key:'3'}
  ])
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }
  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return[
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert('OOPS!','Todos must be over 3 characters long',[
        {text:'Understood',onPress:()=>console.log('alert closed')}
      ])
    }
  }
   return(
    <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList 
                data={todos}
                renderItem={(item)=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
            </View>
        </View>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
