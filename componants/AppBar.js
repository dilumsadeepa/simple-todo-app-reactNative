import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function AppBar(props) {
    return (
        <View style = {styles.appbar}>
            <Text style={styles.apptitle}>TO Do App with native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appbar:{
        
    },
    apptitle:{
        color:'white',
        padding:15,
        fontSize:20,
    }
})

export default AppBar;