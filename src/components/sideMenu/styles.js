import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },

  imagem: {
    height: 100,
    width: 100,
  },

  textNome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: colors.primaria,
  },

  botao: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  icon: {
    color: colors.secundaria,
    marginRight: 20,
  },

  textAba: {
    fontSize: 17,
    color: colors.primaria,
  },

  containerSair: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  botaoSair: {
    flexDirection: 'row',
    //marginTop: 150,
    alignItems: 'center',
  },

});

export default styles;
