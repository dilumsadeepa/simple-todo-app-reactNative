import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppBar from './componants/AppBar';
import AddTodos from './componants/AddTodos';

export default function App() {

  const [todos, setTodos] = useState([
    { text:'Buy a Coffee', key:'1' },
    { text:'Create a App', key:'2' },
    { text:'Run the App', key:'3' }
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  };

  const submitHandler = (text)=>{
    if (text.length > 3) {
      setTodos((prevTodos)=>{
        return [
          {text: text, key:Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('Warning!', 'ToDo Mus be longer than 3 charecters. ')
    }
    
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.appb}>
        <AppBar />
      </View>

      <View style={styles.content}>
        <View>
            <AddTodos submitHandler={submitHandler} />
        </View>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=> pressHandler(item.key)}>
                <Text style={styles.listitem}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:25,
    flex: 1,
    backgroundColor: '#fff',
    
  },
  appb:{
    backgroundColor:'#1594d4',
    width:'100%',
    alignItems:'center',
    
  },
  content:{
    top:10,
    padding:5, 
  },
  list:{
    padding:5
  },
  listitem:{
    padding:10,
    width:'100%',
    backgroundColor:'#e31277',
    margin:10,
  },
});
