import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import ListaLivrosScreen from './ListaLivrosScreen';
import Perfil from './Perfil';
import LoginScreen from './LoginScreen';

const drawerNavigation = createDrawerNavigator(
    {
        Perfil:{
            screen: Perfil,
            navigationOptions:({navigation}) => ({
                title: 'Meus Dados',                
            }),
        },
        ListaLivros:{        
            screen: ListaLivrosScreen,
            navigationOptions:({navigation}) => ({
                title: 'Livros',                
            }),
        },
        Sair: {
            screen: LoginScreen,
            navigationOptions:({navigation}) => ({
                title: 'Sair',                
            }),
        }
    },
    {
        initialRouteName: 'ListaLivros',
    },
);

export default createAppContainer(drawerNavigation);