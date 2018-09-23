import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nome: {
    color: colors.primaria,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },

  titulo: {
    color: colors.secundaria,
  },

  desc: {
    color: colors.primaria,
  },

  containerInfo: {
    marginRight: 20,
  },

  containerIcons: {
    flexDirection: 'row',
  },

  check: {
    color: colors.aprova,
  },

  remove: {
    color: colors.erro,
  },

  botaoIcon: {
    padding: 7,
    alignItems: 'center',
  },

});

export default styles;
