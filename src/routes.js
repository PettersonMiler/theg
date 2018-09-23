import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Main from 'pages/main';
import Cadastro from 'pages/cadastro';
import Perfil from 'pages/perfil';
import Categorias from 'pages/categorias';
import Locais from 'pages/locais';
import PasseiosPen from 'pages/passeiosPen';
import PasseiosPro from 'pages/passeiosPro';
import DetalheLocal from 'pages/detalheLocal';
import Usuario from 'pages/usuario';
import SideMenu from 'components/sideMenu';

const RouteCategoria = createDrawerNavigator({
  Categorias: { screen: Categorias },
  Locais: { screen: Locais },
  DetalheLocal: { screen: DetalheLocal },
});

const Drawer = createDrawerNavigator(
  {
    Categoria: { screen: RouteCategoria },
    Cadastro: { screen: Cadastro },
    Perfil: { screen: Perfil },
    PasseiosPen: { screen: PasseiosPen },
    PasseiosPro: { screen: PasseiosPro },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  },
);

const Routes = createStackNavigator(
  {
    Main: { screen: Main },
    Cadastro: { screen: Cadastro },
    Perfil: { screen: Perfil },
    Categorias: { screen: Drawer },
    Usuario: { screen: Usuario },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default Routes;
