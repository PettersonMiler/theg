import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconBotao: {
    padding: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },

  containerAba: {
    flex: 1,
    alignItems: 'flex-end',
  },

  iconBotaoAba: {
    padding: 10,
    paddingHorizontal: 20,
  },

  icon: {
    color: colors.primaria,
  },

  header: {
    marginLeft: 25,
    color: colors.primaria,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imagem: {
    width: metrics.screenWidth,
  },

  titulo: {
    fontSize: 26,
    paddingTop: 10,
    paddingHorizontal: 10,
    color: colors.primaria,
    fontWeight: 'bold',
  },

  infoTitulo: {
    fontSize: 16,
    paddingTop: 10,
    paddingHorizontal: 10,
    color: colors.primaria,
    fontWeight: 'bold',
  },

  cadastro: {
    flexDirection: 'row',
    margin: 10,
  },

  info: {
    paddingHorizontal: 10,
    color: colors.secundaria,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.secundaria,
    borderRadius: 5,
    fontSize: 14,
    color: colors.primaria,
    margin: 5,
    padding: 10,
    height: 35,
    width: 100,
  },

  buttonCad: {
    margin: 5,
    padding: 10,
    height: 35,
    justifyContent: 'center',
    backgroundColor: colors.primaria,
    borderRadius: 5,
  },

  titleCad: {
    color: colors.fundo,
    fontWeight: 'bold',
    fontSize: 15,
  },

});

export default styles;
