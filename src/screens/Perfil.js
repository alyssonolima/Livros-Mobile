import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Perfil extends Component{

    static navigationOptions = {
        drawerLabel: 'Meus Dados'        
      };


    constructor(props){
        super(props)
        this.state = {
            nome :'',
        }
    }

    render(){
        return(
            <View style={styles.container}>
               <Text >Nome: </Text>
               <TextInput style={styles.inputBox}
                    onChangeText={(titulo) => this.setState({ nome })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Nome"
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"  />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
});