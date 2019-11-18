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
            <View style={styles.cardLivro}>
                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('DetalheLivro', {livro: item, fone: this.props.navigation.getParam('fone')})} }>
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo}> Título:  </Text>
                        <Text style={styles.textoCampoR}> {item.titulo}  </Text>
                    </View>
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo}> Autor:  </Text>
                        <Text style={styles.textoCampoR}> {item.autor}  </Text>
                    </View>
                    <View style={styles.viewCampos}>
                        <Text style={styles.textoCampo}> Contato:  </Text>
                        <Text style={styles.textoCampoR}> {item.telefone}  </Text>
                    </View>
                </TouchableOpacity>
            </View>         
        )
    }
    
    render() {
        
        return (           

            <View style={styles.container}>
                <View style={styles.titulo}><Text style={styles.textoTitulo}>Livros</Text></View>
                <View style={styles.viewLivros}>
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
                    onPress={() => {this.props.navigation.navigate('CadastroLivro', {fone: this.props.navigation.getParam('fone'),})} }>
                    <Icons name='add-circle-outline' size={80} color='#0026ca' /> 
                </TouchableOpacity>
                </View>
            </View>

        );
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
        backgroundColor: '#768fff',
    },    
    textoTitulo:{
        fontSize: 20,         
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: "#ffffff"

    },    
    titulo:{
        backgroundColor: "#0026ca",
    },
})