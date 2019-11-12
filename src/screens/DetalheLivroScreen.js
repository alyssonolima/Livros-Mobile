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

    remover (){
        ()=>alert('Livro Removido com sucesso!')
    }

    render(){        
        return(
            
            <View style={styles.container}>
                <View style={styles.titulo}>
                    <Text style={styles.textoTitulo}>Detalhe</Text>
                </View>
                <View style={styles.interno}>                    
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo}>Nome:  </Text>
                        <Text style={styles.textoCampoR}>{this.state.livro.titulo} </Text>
                    </View>
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo}>Autor:  </Text>
                        <Text style={styles.textoCampoR}>{this.state.livro.autor}  </Text>
                    </View>
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo} >Contato:  </Text>
                        <Text style={styles.textoCampoR} > {this.state.livro.telefone} </Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.remover}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({      
    textoCampo:{
        textAlign: "left",
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 1,        
    },
    textoCampoR:{
        textAlign: "left",
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 3,        
    },
    viewCampos: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch",
        paddingBottom: 10,
        
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
        flex: 1,
        backgroundColor: '#768fff',
    }, 

    interno:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,        
        margin: 5,
       
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