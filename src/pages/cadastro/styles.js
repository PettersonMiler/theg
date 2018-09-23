import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
  },

  containerImage: {
    alignItems: 'center',
    margin: 20,
  },

  image: {
    width: 120,
    height: 150,
  },

  form: {
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.secundaria,
    borderRadius: 5,
    fontSize: 18,
    color: colors.primaria,
    marginBottom: 5,
  },

  cpfNasc: {
    flexDirection: 'row',
  },

  inputCpf: {
    width: '50%',
    borderWidth: 1,
    borderColor: colors.secundaria,
    borderRadius: 5,
    fontSize: 18,
    color: colors.primaria,
    marginBottom: 5,
    marginRight: '1%',
  },

  inputNasc: {
    width: '49%',
    borderWidth: 1,
    borderColor: colors.secundaria,
    borderRadius: 5,
    fontSize: 18,
    color: colors.primaria,
    marginBottom: 5,
  },

  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textPerfil: {
    textAlign: 'center',
    fontSize: 17,
    color: colors.primaria,
  },

  check: {
    padding: 1,
    backgroundColor: colors.fundo,
    borderColor: colors.fundo,
  },

  textBox: {
    fontSize: 15,
    color: colors.primaria,
  },

  checkDesabilitado: {
    fontSize: 15,
    color: colors.primariaDesab,
  },

  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonCanc: {
    backgroundColor: colors.primaria,
    marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 40,
    borderRadius: 5,
  },

  titleCan: {
    color: colors.fundo,
    fontWeight: 'bold',
    fontSize: 15,
  },

  buttonConf: {
    backgroundColor: colors.primaria,
    marginHorizontal: 10,
    padding: 5,
    paddingHorizontal: 40,
    borderRadius: 5,
  },

  titleConf: {
    color: colors.fundo,
    fontWeight: 'bold',
    fontSize: 15,
  },


});

export default styles;
