import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastro from './Cadastro'
import Perfil from './Perfil'



const drawerNavigation = createDrawerNavigator({
    Perfil,
    Home,
});

export default createAppContainer(drawerNavigation);