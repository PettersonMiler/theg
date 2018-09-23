import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-elements';
import styles from './styles';

const Usuario = ({ navigation }) => {
  console.tron.log(navigation.state);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigation.state.params.route)}
          style={styles.iconBotao}
        >
          <Icon name="ios-arrow-back-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.header}>Guia Selecionado</Text>
      </View>
      <View style={styles.containerUsuario}>
        <Icon name="ios-contact" size={155} />
        <Text style={styles.nome}>Petterson Miler</Text>
        <Rating
          type="star"
          fractions={1}
          readonly
          startingValue={4}
          imageSize={20}
        />
      </View>
      <View style={styles.containerSobre}>
        <Text style={styles.sobre}>Sobre</Text>
        <Text style={styles.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc viverra ultrices maximus.
          Vestibulum tristique erat vel est dignissim, in ornare tellus feugiat.
        </Text>
      </View>
      <View style={styles.containerRating}>
        <Rating
          type="star"
          fractions={1}
          startingValue={0}
          imageSize={30}
        />
        <TouchableOpacity onPress={() => {}} style={styles.botaoRating}>
          <Text style={styles.avaliar}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Usuario;
