import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150,
  },

  definicao: {
    marginTop: 20,
    fontSize: 16,
    color: colors.secundaria,
  },

  buttonGuia: {
    backgroundColor: colors.primaria,
    padding: 10,
    paddingHorizontal: 23,
    borderRadius: 5,
    marginTop: 15,
  },

  button: {
    backgroundColor: colors.primaria,
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },

  title: {
    color: colors.fundo,
    fontWeight: 'bold',
    fontSize: 15,
  },

});

export default styles;
