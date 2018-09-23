import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
    justifyContent: 'center',
  },

  containerImage: {
    alignItems: 'center',
  },

  form: {
    padding: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.secundaria,
    borderRadius: 5,
    fontSize: 18,
    color: colors.primaria,
    marginBottom: 10,
  },

  formConclui: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonAces: {
    backgroundColor: colors.primaria,
    padding: 10,
    marginHorizontal: 95,
    borderRadius: 5,
  },

  titleAces: {
    color: colors.fundo,
    fontWeight: 'bold',
    fontSize: 15,
  },

  buttonInsc: {
    marginTop: 10,
    padding: 10,
  },

  titleInsc: {
    color: colors.primaria,
    fontSize: 15,
    textDecorationLine: 'underline',
  },

});

export default styles;
