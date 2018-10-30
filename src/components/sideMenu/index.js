import React from 'react';

import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SideMenu = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.imagem}>
      <Image style={styles.imagem} source={require('images/thegIcon.png')} />
    </View>
    <Text style={styles.textNome}>Joyce Almeida</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.botao}>
      <Icons name="exchange" size={19} style={styles.icon} />
      <Text style={styles.textAba}>Trocar Perfil</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Categorias')} style={styles.botao}>
      <Icons name="home" size={20} style={styles.icon} />
      <Text style={styles.textAba}>Categorias</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('PasseiosPen')}
      style={styles.botao}
    >
      <Icons name="pencil-square-o" size={20} style={styles.icon} />
      <Text style={styles.textAba}>Passeios Pendentes</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('PasseiosPro')} style={styles.botao}>
      <Icons name="send" size={20} style={styles.icon} />
      <Text style={styles.textAba}>Passeios Programados</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.botao}>
      <Icons name="user-o" size={21} style={styles.icon} />
      <Text style={styles.textAba}>Conta</Text>
    </TouchableOpacity>
    <View style={styles.containerSair}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.botaoSair}>
        <Icons name="sign-in" size={21} style={styles.icon} />
        <Text style={styles.textAba}>Sair</Text>
      </TouchableOpacity>
    </View>
  </View>
);

SideMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SideMenu;
