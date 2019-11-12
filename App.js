import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from "./src/screens/LoginScreen";
import MenuPrincipal from "./src/screens/MenuPrincipal";
import CadastroLivroScreen from "./src/screens/CadastroLivroScreen";
import DetalheLivroScreen from "./src/screens/DetalheLivroScreen";

const stackNavigator = createStackNavigator(
  {
    LoginScreen : {
        screen: LoginScreen
    },
    MenuPrincipal: {
        screen: MenuPrincipal,

        navigationOptions: ({navigation}) => ({
          headerLeft: <Icon size={24} style={{marginLeft: 10}} name="menu" onPress={()=>navigation.toggleDrawer()}/>,          
        }),
      
    },
    CadastroLivro: {
      screen: CadastroLivroScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft:false,        
        headerTruncatedBackTitle : true,
        headerShown: false,
        
      }),
    },
    DetalheLivro:{
      screen: DetalheLivroScreen,
      navigationOptions: ({navigation}) => ({
        
      }),
    }

},
{
  
},
);

export default createAppContainer(stackNavigator);
