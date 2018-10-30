import React, { Component } from 'react';
import {
  View,
  YellowBox,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsuarioActions } from 'store/ducks/usuario';
import styles from './styles';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Main extends Component {
  state = {
    login: '',
    senha: '',
  };

  componentDidUpdate() {
    if (this.props.usuario.data.user) {
      this.props.navigation.navigate('Perfil');
    }
  }

  login = () => {
    if (!this.state.login || !this.state.senha) {
      Alert.alert(
        'Login Incorreto',
        'Usuário ou senha não informados.',
      );
      return;
    }

    const { login, senha } = this.state;
    this.props.UsuarioActions.getUserLogin(login, senha);
  }

  render() {
    return (
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
            onChangeText={login => this.setState({ login })}
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
            onChangeText={senha => this.setState({ senha })}
          />
        </View>
        <View style={styles.formConclui}>
          { this.props.usuario.erro
            ? <Text style={styles.titleErro}>Login ou senha incorreto</Text>
            : null}
          <TouchableOpacity onPress={this.login} style={styles.buttonAces}>
            { this.props.usuario.loading
            ? <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
            : <Text style={styles.titleAces}>Acessar</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} style={styles.buttonInsc}>
            <Text style={styles.titleInsc}>INSCREVER-SE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/*
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
*/

const mapStateToProps = state => ({
  usuario: state.usuario,
});

function mapDispatchToProps(dispatch) {
  return {
    UsuarioActions: bindActionCreators(UsuarioActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
