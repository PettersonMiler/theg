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
});

export default styles;
