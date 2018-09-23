import React, { Component } from 'react';

import {
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

class Cadastro extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
      navigate: PropTypes.func,
      state: PropTypes.shape({
        key: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    nome: '',
    usuario: '',
    email: '',
    cpf: '',
    nascimento: '',
    senha: '',
    confSenha: '',
    guia: false,
    turista: false,
    ambos: false,
    disabled: false,
  };

  validaVoltar = () => {
    if (this.props.navigation.state.key === 'Cadastro') {
      this.props.navigation.navigate('Perfil');
    }
    this.props.navigation.goBack();
  };

  check = () => {
    if (this.state.ambos) {
      this.setState({
        guia: false,
        turista: false,
        ambos: false,
        disabled: false,
      });
    } else {
      this.setState({
        guia: true,
        turista: true,
        ambos: true,
        disabled: true,
      });
    }
  };

  submit = () => {
    if (this.state.senha !== this.state.confSenha) {
      console.tron.log('aqui');
      Alert.alert(
        'Senhas incorretas',
        'Favor verificar e tentar novamente.',
      );
    }
  }
  render() {
    console.tron.log(this.props.navigation);
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.containerImage}>
          <Image source={require('images/theg.png')} style={styles.image} />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputUsuario.focus()}
            keyboardType="email-address"
            // value={String(product.qtt)}
            onChangeText={nome => this.setState({ nome })}
          />

          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Usuário"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputEmail.focus()}
            ref={(input) => { this.inputUsuario = input; }}
            // value={String(product.qtt)}
            onChangeText={usuario => this.setState({ usuario })}
          />

          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-Mail"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputCpf.focus()}
            ref={(input) => { this.inputEmail = input; }}
            // value={String(product.qtt)}
            onChangeText={email => this.setState({ email })}
          />

          <View style={styles.cpfNasc}>
            <TextInput
              style={styles.inputCpf}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="CPF"
              placeholderTextColor="#2c4eb8"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.inputNasc.focus()}
              ref={(input) => { this.inputCpf = input; }}
              // value={String(product.qtt)}
              onChangeText={cpf => this.setState({ cpf })}
            />

            <TextInput
              style={styles.inputNasc}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nascimento"
              placeholderTextColor="#2c4eb8"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.inputSenha.focus()}
              ref={(input) => { this.inputNasc = input; }}
              // value={String(product.qtt)}
              onChangeText={nascimento => this.setState({ nascimento })}
            />
          </View>

          <TextInput
            style={styles.input}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Senha"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.inputConfir.focus()}
            ref={(input) => { this.inputSenha = input; }}
            // value={String(product.qtt)}
            onChangeText={senha => this.setState({ senha })}
          />

          <TextInput
            style={styles.input}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Confirme sua Senha"
            placeholderTextColor="#2c4eb8"
            underlineColorAndroid="transparent"
            ref={(input) => { this.inputConfir = input; }}
            // value={String(product.qtt)}
            onChangeText={confSenha => this.setState({ confSenha })}
          />

          <Text style={styles.textPerfil}>Perfil desejado</Text>
          <View style={styles.box}>
            <CheckBox
              title="Guia"
              checkedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              uncheckedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              textStyle={[styles.textBox, this.state.disabled ? styles.checkDesabilitado : null]}
              containerStyle={styles.check}
              onPress={() => this.setState({ guia: !this.state.guia })}
              checked={this.state.guia}
              disabled={this.state.disabled}
            />
            <CheckBox
              title="Turista"
              checkedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              uncheckedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              textStyle={[styles.textBox, this.state.disabled ? styles.checkDesabilitado : null]}
              containerStyle={styles.check}
              checked={this.state.turista}
              onPress={() => this.setState({ turista: !this.state.turista })}
              disabled={this.state.disabled}
            />
            <CheckBox
              title="Ambos"
              checkedColor="#ff7025"
              uncheckedColor="#ff7025"
              containerStyle={styles.check}
              textStyle={styles.textBox}
              checked={this.state.ambos}
              onPress={this.check}
            />
          </View>
          <View style={styles.botoesAcao}>
            <TouchableOpacity onPress={() => this.validaVoltar()} style={styles.buttonCanc}>
              <Text style={styles.titleCan}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.submit()} style={styles.buttonConf}>
              <Text style={styles.titleConf}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Cadastro;
