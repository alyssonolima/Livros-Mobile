import React, { Component } from 'react';
import { View, StyleSheet, Text , TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class DetalheLivroScreen extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            livro: this.props.navigation.getParam('livro'),
        }
    }  

    rmover (){
        ()=>alert('Livro Removido com sucesso!')
    }

    render(){        
        return(
            <View style={styles.container}>
               <Text style={styles.textoTitulo}>Detalhe</Text>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}>Nome:  </Text>
                    <Text style={styles.textoCampo}>{this.state.livro.titulo} </Text>
                </View>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}>Autor:  </Text>
                    <Text style={styles.textoCampo}>{this.state.livro.autor}  </Text>
                </View>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo} >Telefone Vendedor:  </Text>
                    <Text style={styles.textoCampo} > {this.state.livro.telefone} </Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.remover}>Remover</Text>
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
    viewCampos: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch"
        
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