import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class Home extends Component {
    static navigationOptions = {
        headerTruncatedBackTitle : true,
        headerShown: false,
    }

    constructor(props) {
        super(props)
        this.state={
            titulo:'',
            autor: '',
            preco: "R$",           
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    componentDidMount() {
    }

    cadastrar() {
        if(this.state.titulo != '' & this.state.autor != ''){
            firestore().collection("livros").add({
                titulo: this.state.titulo,
                autor: this.state.autor,
                preco: this.state.preco,
            })
            .then(
                ()=>alert('Livro cadastrado com sucesso')
                
                )
            .catch(()=>alert('Erro ao cadastrar livro'))

        } else{
            ()=>alert('Verifique se todos os dados foram preenchidos!')
        }
        
            
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textosTitulos}>Cadastrar</Text>
                <View style={styles.campos}>
                    <Text style={styles.textosTitulos}>Nome: </Text>
                    <TextInput style={styles.inputBox}
                        onChangeText={(titulo) => this.setState({ titulo })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Nome"
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        onSubmitEditing={() => this.autor.focus()} />
                </View>
                <View style={styles.campos}>
                    <Text style={styles.textosTitulos}>Autor: </Text>
                    <TextInput style={styles.inputBox}
                        onChangeText={(autor) => this.setState({ autor })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Autor"
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        ref={(input) => this.autor = input}
                    />
                </View>
                <View style={styles.campos}>
                    <Text style={styles.textosTitulos}>Preço: </Text>
                    <TextInput style={styles.inputBox}
                        onChangeText={(preco) => this.setState({ preco })}
                        underlineColorAndroid='rgba(0,0,0,0)'                    
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        defaultValue="R$ "
                        keyboardType = "decimal-pad"
                        ref={(input) => this.preco = input}
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.cadastrar}>Enviar</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    campos: {        
        flexDirection: "row",
        alignItems: 'center'
        
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

    textosTitulos:{
        fontSize: 18,
    }
});