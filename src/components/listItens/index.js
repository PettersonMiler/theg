import React from 'react';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ListItens = ({
  id,
  categoria,
  navigation,
  imagem,
  titulo,
  rota,
}) => {
  console.tron.log(navigation);
  console.tron.log('aqui');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(rota, {
        id,
        categoria,
        titulo,
      })}
      style={styles.botao}
    >
      <ImageBackground style={styles.imagem} source={imagem} >
        <Text style={styles.titulo}>{titulo}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

ListItens.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  categoria: PropTypes.number.isRequired,
  rota: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ListItens;
