import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
  containerNome: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nome: {
    color: colors.secundaria,
    marginHorizontal: 10,
  },

  tituloHor: {
    marginHorizontal: 10,
    color: colors.primaria,
    fontWeight: 'bold',
  },

  data: {
    color: colors.primaria,
    marginHorizontal: 10,
    marginTop: 5,
  },

});

export default styles;
