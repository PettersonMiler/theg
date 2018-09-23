import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ListGuias from './components/ListGuias';
import styles from './styles';

const guias = [
  {
    id: '5416320',
    idGuia: '64862',
    nome: 'Joyce de Souza',
    rating: 4,
    horarios: [
      {
        id: 5141,
        data: '10/09/2018',
        horaIni: '8:00',
        horaFin: '12:00',
      },
      {
        id: 462,
        data: '11/09/2018',
        horaIni: '13:00',
        horaFin: '15:00',
      },
    ],
  },
  {
    id: '8523',
    idGuia: '52952',
    nome: 'Jessica de Souza',
    rating: 1,
    horarios: [
      {
        id: 16541,
        data: '10/09/2018',
        horaIni: '9:00',
        horaFin: '11:00',
      },
      {
        id: 8494,
        data: '10/09/2018',
        horaIni: '18:00',
        horaFin: '20:00',
      },
    ],
  },
];

const DetalheLocal = ({ navigation }) => {
  console.tron.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Locais')} style={styles.iconBotao}>
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
      <ScrollView style={styles.scroll}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagem} source={require('images/250kb320x240.png')} />
        </View>
        <Text style={styles.titulo}>{navigation.state.params.titulo}</Text>
        <Text style={styles.infoTitulo}>Sobre</Text>
        <Text style={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc viverra ultrices maximus.
          Vestibulum tristique erat vel est dignissim, in ornare tellus feugiat.
        </Text>
        <Text style={styles.infoTitulo}>Horário de Funcionamento</Text>
        <Text style={styles.info}>Livre.</Text>
        <Text style={styles.infoTitulo}>Cadastrar Disponibilidade</Text>
        <View style={styles.cadastro}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Data"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputUsuario.focus()}
            keyboardType="email-address"
            // value={String(product.qtt)}
            // onChangeText={text => carQuantity(product.id, Number(text))}
          />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Hora"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputUsuario.focus()}
            keyboardType="email-address"
            // value={String(product.qtt)}
            // onChangeText={text => carQuantity(product.id, Number(text))}
          />
          <TouchableOpacity onPress={() => {}} style={styles.buttonCad}>
            <Text style={styles.titleCad}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoTitulo}>Guias Disponíveis</Text>
        {guias.map(item => (
          <ListGuias
            key={item.id}
            guia={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

DetalheLocal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default DetalheLocal;
