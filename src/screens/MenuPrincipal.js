import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastro from './Cadastro'
import Perfil from './Perfil'

const drawerNavigation = createDrawerNavigator({
    Home,
    Perfil,
    Cadastro
});

export default createAppContainer(drawerNavigation);