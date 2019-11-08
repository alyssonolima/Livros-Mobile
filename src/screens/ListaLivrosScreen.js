import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Icons from 'react-native-vector-icons/MaterialIcons';

import firestore from '@react-native-firebase/firestore';

const extractKey = ({ id }) => id

export default class ListaLivrosScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            livros: [],                     
        }

        this.getLivros = this.getLivros.bind(this)
    }

    componentDidMount() {
        this.getLivros()
    }

    getLivros() {
        firestore().collection("livros").get()
            .then((querySnapshot) => {
                let livros = []
                querySnapshot.forEach((doc) => {
                    livros.push({id: doc.id,...doc.data()})
                });
                this.setState({ livros: livros })
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity                            
                    onPress={() => {this.props.navigation.navigate('DetalheLivro')} }>
                    <Text style={styles.row}> {item.titulo}  </Text>
                </TouchableOpacity>
            
        )
    }
    
    render() {
        
        return (           

            <View style={styles.container}>
                <View style={styles.viewLivros}>                
                    <Text style={styles.textoTitulo}>Livros</Text>
                    <NavigationEvents onDidFocus={() => this.getLivros()} />
                    <FlatList
                        data={this.state.livros}
                        renderItem={this.renderItem}
                        keyExtractor={extractKey}
                    />
                </View>
                <View style={styles.viewAdd}>
                <TouchableOpacity
                style = {styles.botao}
                onFocus={()=> {this.color('blue')}}
                    onPress={() => {this.props.navigation.navigate('CadastroLivro')} }>
                    <Icons name='add-circle-outline' size={80} color='black' /> 
                </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    botao: {
        paddingRight: 15,
        paddingBottom: 15,
    },
    viewLivros: {
        flex : 4,
    },
    viewAdd: {
        flex : 1,
        alignItems: "flex-end",
        alignContent: "flex-end"

    },
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    textoTitulo:{
        fontSize: 30,       
        color: 'purple',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20,

    },
})