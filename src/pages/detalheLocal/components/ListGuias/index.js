import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import styles from './styles';

const ListGuias = ({ guia, navigation }) => {
  console.tron.log(navigation.state.routeName);
  const route = navigation.state.routeName;
  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Usuario', { route })}
        >
          <Text style={styles.nome}>{guia.nome}</Text>
        </TouchableOpacity>
        <Rating
          type="star"
          fractions={1}
          readonly
          startingValue={guia.rating}
          imageSize={15}
        />
      </View>
      <Text style={styles.tituloHor}>Horário disponível:</Text>
      {guia.horarios.map(item => (
        <Text
          key={item.id}
          style={styles.data}
        >
          {item.data} - {item.horaIni} até {item.horaFin}
        </Text>
      ))}
    </View>
  );
};

ListGuias.propTypes = {
  guia: PropTypes.shape().isRequired,
};

export default ListGuias;
