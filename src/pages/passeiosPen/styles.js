import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
  },

  containerHeader: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  textitulo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -50,
  },

  header: {
    color: colors.primaria,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  iconBotaoAba: {
    padding: 10,
    paddingHorizontal: 20,
  },

  icon: {
    color: colors.primaria,
  },
});

export default styles;
