import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class Perfil extends Component{
    
    constructor(props){
        super(props)
        this.state = {
           fone: this.props.navigation.getParam('fone', null), 
           nome: null,
           user: [],    
        };
        this.cadastrar = this.cadastrar.bind(this)
    }

    componentDidMount(){
        let user = firestore().collection("user").doc(this.state.fone).get()
        alert(user.querySnapshot)
    }   

    cadastrar() {
        if(this.state.fone != null & this.state.nome != null){
            firestore().collection("user").doc(this.state.fone).set({
                fone: this.state.fone,
                nome: this.state.nome,
            }).then(alert('Perfil alterado com sucesso!'))
        }else{
            alert('Verifique se todos os dados foram preenchidos!')
        }      
    }

    render(){ 
        
        return(
            <View style={styles.container}>
               <View style={styles.titulo}><Text style={styles.textoTitulo}>Meus Dados</Text></View>
                <View style={styles.interno}>                     
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
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textoCampo:{
        textAlign: "left",
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 1,
    },
    inputBox: {
        width: 200,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    textoTitulo:{
        fontSize: 20,       
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
    },
    titulo:{
        backgroundColor: "#0026ca",
    },    
    container: {              
        backgroundColor: "#768fff",
        flex: 1,
    },
    interno:{
        justifyContent: 'center',
        alignItems: 'center',  
        margin: 10,
        padding: 20,
    },    
    viewCampos: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch"
        
    },
    button: {
        width: 300,
        backgroundColor: '#0026ca',
        borderRadius: 25,
        marginVertical: 30,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});