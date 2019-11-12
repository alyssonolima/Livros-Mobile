import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CardLivro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            livro: this.props.livro,                     
        }        
    }

    render(){
        return(
            <View style={styles.cardLivro}>                
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}> Título:  </Text>
                    <Text style={styles.textoCampoR}> {this.state.livro.titulo}  </Text>
                </View>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}> Autor:  </Text>
                    <Text style={styles.textoCampoR}> {this.state.livro.autor}  </Text>
                </View>
                <View style={styles.viewCampos}>
                    <Text style={styles.textoCampo}> Contato:  </Text>
                    <Text style={styles.textoCampoR}> {this.state.livro.telefone}  </Text>
                </View>              
            </View>         
        )
    }
}

const styles = StyleSheet.create({
    cardLivro:{
        margin: 5,
        padding: 10,
        borderColor: 'black',
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#2962ff",
    },
    viewCampos: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "stretch",        
    },
    textoCampo: {
        textAlign: "left",
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 1,
    },
    textoCampoR: {
        textAlign: "left",
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        flex: 3,
    },   
})