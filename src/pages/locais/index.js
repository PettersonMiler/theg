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
    categoria: 0,
    titulo: 'Orla do Guaiba',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 1,
    categoria: 0,
    titulo: 'Beira Rio',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 2,
    categoria: 0,
    titulo: 'Arena do Grêmio',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 3,
    categoria: 1,
    titulo: 'Woods',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 4,
    categoria: 1,
    titulo: 'Valen Bar',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 5,
    categoria: 1,
    titulo: 'Margot',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 6,
    categoria: 2,
    titulo: 'Eleven Dinner Room',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 7,
    categoria: 2,
    titulo: 'Freio de Ouro',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 8,
    categoria: 2,
    titulo: 'Nono Ludovico',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 9,
    categoria: 3,
    titulo: 'Praça Shinga',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 10,
    categoria: 3,
    titulo: 'Parque Farroupilha',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 11,
    categoria: 3,
    titulo: 'Parque Marinha do Brasil',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 12,
    categoria: 4,
    titulo: 'Casa de Cultura Mario Quintana',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 13,
    categoria: 4,
    titulo: 'Fundação Ibere Camargo',
    imagem: require('images/250kb320x240.png'),
  },
  {
    id: 14,
    categoria: 4,
    titulo: 'Museu de Arte do Rio Grande do Sul',
    imagem: require('images/250kb320x240.png'),
  },
];

const Locais = ({ navigation }) => {
  console.tron.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.push('Categorias')} style={styles.iconBotao}>
          <Icon name="ios-arrow-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.header}>{navigation.state.params.titulo}</Text>
        <View style={styles.containerAba}>
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
        </View>
      </View>
      <ScrollView>
        {itens.map(item => (
          <ListItens
            key={item.id}
            id={item.id}
            categoria={item.categoria}
            navigation={navigation}
            imagem={item.imagem}
            titulo={item.titulo}
            rota="DetalheLocal"
          />
      ))}
      </ScrollView>
    </View>
  );
};

Locais.navigationOptions = {
  header: null,
};

Locais.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Locais;
