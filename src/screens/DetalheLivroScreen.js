import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class DetalheLivroScreen extends Component{
    constructor(props){
        super(props)
        
    }  

    render(){        
        return(
            <View style={styles.container}>
               <Text>Detalhe do Livro</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
        
});