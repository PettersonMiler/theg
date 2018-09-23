import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ListPasseios = ({
  nome,
  rating,
  data,
  horaIni,
  horaFin,
  local,
  navigation,
  pendente,
}) => {
  const route = navigation.state.routeName;
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Usuario', { route })}
        >
          <Text style={styles.nome}>{nome}</Text>
        </TouchableOpacity>
        <Rating
          type="star"
          fractions={1}
          readonly
          startingValue={rating}
          imageSize={15}
        />
      </View>
      <View style={styles.containerItem}>
        <View style={styles.containerInfo}>
          <View style={styles.containerItem}>
            <Text style={styles.titulo}>Horário: </Text>
            <Text style={styles.desc}>{data} - {horaIni} às {horaFin}</Text>
          </View>
          <View style={styles.containerItem}>
            <Text style={styles.titulo}>Local: </Text>
            <Text style={styles.desc}>{local}</Text>
          </View>
        </View>
        <View>
          { !pendente
          ? <View />
          : (
            <View style={styles.containerIcons}>
              <TouchableOpacity style={styles.botaoIcon} onPress={() => {}}>
                <Icon name="check" size={26} style={styles.check} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoIcon} onPress={() => {}}>
                <Icon name="remove" size={26} style={styles.remove} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
// pendente === 1
export default ListPasseios;
