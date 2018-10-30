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
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsuarioActions } from 'store/ducks/usuario';
import TextInputMask from 'react-native-text-input-mask';
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
    usuario: {
      nome: '',
      user: '',
      email: '',
      cpf: '',
      nascimento: '',
      guia: false,
      turista: false,
    },
    ambos: false,
    disabled: false,
    senha: '',
    confSenha: '',
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
        usuario: {
          ...this.state.usuario,
          guia: false,
          turista: false,
        },
        ambos: false,
        disabled: false,
      });
    } else {
      this.setState({
        usuario: {
          ...this.state.usuario,
          guia: true,
          turista: true,
        },
        ambos: true,
        disabled: true,
      });
    }
  };

  validaEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      return false;
    }
    return true;
  }

  idade = (aniversario) => {
    const nascimento = aniversario.split('/');
    const dataNascimento = new Date(
      parseInt(nascimento[2], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[0], 10),
    );

    const diferenca = Date.now() - dataNascimento.getTime();
    const idade = new Date(diferenca);
    return Math.abs(idade.getUTCFullYear() - 1970);
  }

  validarCPF = (cpfInp) => {
    const cpf = cpfInp.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999') { return false; }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i += 1) { add += parseInt(cpf.charAt(i)) * (10 - i); }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) { return false; }
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i += 1) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }

  submit = () => {
    console.tron.log(this.state.usuario.nome);
    if (!this.state.usuario.nome) {
      Alert.alert(
        'Nome não informado',
        'Favor informar um nome.',
      );
      return;
    }

    if (!this.state.usuario.user) {
      Alert.alert(
        'Usuário não informado',
        'Favor informar um usuário.',
      );
      return;
    }

    if (!this.state.usuario.email) {
      Alert.alert(
        'Email não informado',
        'Favor informar um e-mail valido.',
      );
      return;
    }

    if (!this.validaEmail(this.state.usuario.email)) {
      Alert.alert(
        'Email invalido',
        'Favor informar um e-mail valido.',
      );
      return;
    }

    if (!this.state.usuario.cpf) {
      Alert.alert(
        'CPF não informado',
        'Favor informar um CPF valido.',
      );
      return;
    }

    if (!this.validarCPF(this.state.usuario.cpf)) {
      Alert.alert(
        'CPF Incorreto',
        'Favor informar um CPF valido.',
      );
      return;
    }

    if (!this.state.usuario.nascimento) {
      Alert.alert(
        'Data de nascimento não informada',
        'Favor informar uma data de nascimento valida.',
      );
      return;
    }

    if (this.idade(this.state.usuario.nascimento) < 18) {
      Alert.alert(
        'Idade menor que 18 anos',
        'Só é possivel realizar cadastro maiores de 18 anos.',
      );
      return;
    }

    if (!this.state.senha) {
      Alert.alert(
        'Senhas não informada',
        'Favor informar uma senha valida.',
      );
      return;
    }

    if (this.state.senha !== this.state.confSenha) {
      Alert.alert(
        'Senhas incorretas',
        'Favor verificar e tentar novamente.',
      );
      return;
    }

    if (!this.state.usuario.guia && !this.state.usuario.turista) {
      Alert.alert(
        'Pefil não informado',
        'Favor informar o perfil.',
      );
      return;
    }

    this.props.UsuarioActions.postUserLogin(
      this.state.usuario.email,
      this.state.senha,
      this.state.usuario,
    );
  };

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
            onChangeText={nome => this.setState({ usuario: { ...this.state.usuario, nome } })}
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
            onChangeText={user => this.setState({ usuario: { ...this.state.usuario, user } })}
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
            onChangeText={email => this.setState({ usuario: { ...this.state.usuario, email } })}
          />

          <View style={styles.cpfNasc}>
            <TextInputMask
              style={styles.inputCpf}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="CPF"
              placeholderTextColor="#2c4eb8"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.inputNasc.focus()}
              refInput={(input) => { this.inputCpf = input; }}
              // value={String(product.qtt)}
              onChangeText={cpf => this.setState({ usuario: { ...this.state.usuario, cpf } })}
              mask="[000] [000] [000]-[00]"
              keyboardType="numeric"
            />

            <TextInputMask
              style={styles.inputNasc}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nascimento"
              placeholderTextColor="#2c4eb8"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.inputSenha.focus()}
              refInput={(input) => { this.inputNasc = input; }}
              // value={String(product.qtt)}
              onChangeText={nascimento => (
                this.setState({ usuario: { ...this.state.usuario, nascimento } })
              )}
              mask="[00]/[00]/[0000]"
              keyboardType="numeric"
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

          { this.props.usuario.erro
          ? <Text style={styles.titleErro}>E-mail já está sendo usado.</Text>
          : null}

          <Text style={styles.textPerfil}>Perfil desejado</Text>
          <View style={styles.box}>
            <CheckBox
              title="Guia"
              checkedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              uncheckedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              textStyle={[styles.textBox, this.state.disabled ? styles.checkDesabilitado : null]}
              containerStyle={styles.check}
              onPress={() => (
                this.setState({
                  usuario: { ...this.state.usuario, guia: !this.state.usuario.guia },
                })
              )}
              checked={this.state.usuario.guia}
              disabled={this.state.disabled}
            />
            <CheckBox
              title="Turista"
              checkedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              uncheckedColor={this.state.disabled ? '#ffa170' : '#ff7025'}
              textStyle={[styles.textBox, this.state.disabled ? styles.checkDesabilitado : null]}
              containerStyle={styles.check}
              checked={this.state.usuario.turista}
              onPress={() => this.setState({
                usuario: {
                  ...this.state.usuario,
                  turista: !this.state.usuario.turista,
                },
              })}
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
              { this.props.usuario.loading
              ? <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
              : <Text style={styles.titleConf}>Confirmar</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.usuario,
});

function mapDispatchToProps(dispatch) {
  return {
    UsuarioActions: bindActionCreators(UsuarioActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
