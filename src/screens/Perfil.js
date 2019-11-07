import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Perfil extends Component{
    constructor(props){
        super(props)
        this.state = {
           fone: "+55 84 0000-0000", 
           nome: '',     
        };
    }

    cadastrar() {        
       alert('Perfil alterado com sucesso!')  
    }

    render(){
        
        return(
            <View style={styles.container}>
               <Text style={styles.textoTitulo}>Meus Dados</Text>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo} >Telefone:  </Text>
                    <TextInput style={styles.inputBox}                        
                        underlineColorAndroid='rgba(0,0,0,0)'                        
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff" 
                        editable = {false}
                        value = {this.state.fone } />
                </View>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}>Nome:  </Text>
                    <TextInput style={styles.inputBox}
                        onChangeText={(nome) => this.setState({ nome: nome })}
                        underlineColorAndroid='rgba(0,0,0,0)'                        
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff" 
                        value = {this.state.nome} />

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.cadastrar}>Enviar</Text>
                </TouchableOpacity>
               
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textoCampo:{
        textAlign: "left",
        fontSize: 16,
        color: 'blue',
        fontWeight: 'bold',
        flex: 1,
        paddingLeft: 15,

    },
    inputBox: {
        height: 40,
        width: 250,
        backgroundColor: '#eeeeee',
        borderRadius: 25,        
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10,
        marginLeft: 5,
        marginRight: 20,
        alignItems: "flex-end",
              
    },
    textoTitulo:{
        fontSize: 30,       
        color: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    
    viewCampos: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch"
        
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});