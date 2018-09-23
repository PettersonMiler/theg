import React from 'react';

import {
  View,
  YellowBox,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.containerImage}>
      <Image source={require('images/theg.png')} />
    </View>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Usuário"
        placeholderTextColor="#2c4eb8"
        underlineColorAndroid="transparent"
        onSubmitEditing={() => this.inputSenha.focus()}
        keyboardType="email-address"
        // value={String(product.qtt)}
        // onChangeText={text => carQuantity(product.id, Number(text))}
      />

      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Senha"
        placeholderTextColor="#2c4eb8"
        underlineColorAndroid="transparent"
        secureTextEntry
        returnKeyType="go"
        ref={(input) => { this.inputSenha = input; }}
        // value={String(product.qtt)}
        // onChangeText={text => carQuantity(product.id, Number(text))}
      />
    </View>
    <View style={styles.formConclui}>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.buttonAces}>
        <Text style={styles.titleAces}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.buttonInsc}>
        <Text style={styles.titleInsc}>INSCREVER-SE</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Main.navigationOptions = {
  header: null,
};


Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
