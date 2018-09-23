import React from 'react';
import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Perfil = ({ navigation }) => {
  console.tron.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('images/theg.png')} />
      <Text style={styles.definicao}>Escolha seu perfil de acesso</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Categorias')} style={styles.buttonGuia}>
        <Text style={styles.title}>GUIA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categorias')} style={styles.button}>
        <Text style={styles.title}>TURISTA</Text>
      </TouchableOpacity>
    </View>
  );
};

Perfil.navigationOptions = {
  header: null,
};

Perfil.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Perfil;
