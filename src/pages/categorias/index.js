import React from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItens from 'components/listItens';
import styles from './styles';

const itens = [
  {
    id: 0,
    titulo: 'Entretenimento',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 1,
    titulo: 'Vida Noturna',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 2,
    titulo: 'Gastronomia',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 3,
    titulo: 'Parques e Praças',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 4,
    titulo: 'Arte e Cultura',
    imagem: require('images/250kb320x240.png'),
  },
];

const Categorias = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerHeader}>
      <TouchableOpacity
        onPress={() => {
          if (!navigation.state.isDrawerOpen) {
            navigation.dispatch(DrawerActions.openDrawer());
          } else {
            navigation.dispatch(DrawerActions.closeDrawer());
          }
        }}
        style={styles.iconBotaoAba}
      >
        <Icon name="ios-menu" size={30} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.textitulo}>
        <Text style={styles.header}>Categorias</Text>
      </View>
    </View>
    <ScrollView>
      {itens.map(item => (
        <ListItens
          key={item.id}
          id={item.id}
          categoria={item.id}
          navigation={navigation}
          imagem={item.imagem}
          titulo={item.titulo}
          rota="Locais"
        />
    ))}
    </ScrollView>
  </View>
);

Categorias.navigationOptions = {
  header: null,
};

Categorias.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Categorias;
