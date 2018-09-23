import { StyleSheet } from 'react-native';
import { colors } from 'styles';

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

  containerUsuario: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome: {
    color: colors.primaria,
    fontSize: 25,
    fontWeight: 'bold',
  },

  containerSobre: {
    marginTop: 40,
    marginHorizontal: 10,
  },

  sobre: {
    color: colors.primaria,
    fontSize: 17,
  },

  info: {
    marginTop: 5,
    color: colors.secundaria,
    fontSize: 14,
  },

  containerRating: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25,
  },

  botaoRating: {
    backgroundColor: colors.primaria,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },

  avaliar: {
    fontSize: 15,
    color: colors.fundo,
  },

});

export default styles;
