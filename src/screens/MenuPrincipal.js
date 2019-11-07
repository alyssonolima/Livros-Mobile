import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import ListaLivrosScreen from './ListaLivrosScreen'
import Perfil from './Perfil'



const drawerNavigation = createDrawerNavigator(
    {
        Perfil:{
            screen: Perfil,
            navigationOptions:({navigation}) => ({            
                fone: navigation.getParam('fone', ''),
                title: 'Meus Dados'
            }),
        },
        ListaLivros:{        
            screen: ListaLivrosScreen,
            navigationOptions:({navigation}) => ({
                title: 'Livros'
            }),
        },
    },
    {
        initialRouteName: 'ListaLivros',
    },
);

export default createAppContainer(drawerNavigation);