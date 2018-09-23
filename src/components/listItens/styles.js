import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({

  botao: {
    marginBottom: 10,
  },

  imagem: {
    width: metrics.screenWidth,
    height: 250,
    justifyContent: 'flex-end',
  },

  titulo: {
    color: colors.fundo,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },

});

export default styles;
