import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

function AddTodos({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Add To Do'
                placeholderTextColor={'white'}
                onChangeText={changeHandler}
            />
            <Button title='ADD' onPress={()=>submitHandler(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        margin:15,
        backgroundColor:'black',
        color:'white',
    },
    
})

export default AddTodos;