import React from 'react';

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ListPasseios from 'components/listPasseios';
import styles from './styles';

const passeios = [
  {
    id: '5416320',
    nome: 'Jessica de Souza',
    rating: 2,
    data: '11/09/2018',
    horaIni: '16:00',
    horaFin: '19:00',
    local: 'Beira rio',
  },
  {
    id: '52659',
    nome: 'Petterson Miler',
    rating: 5,
    data: '20/09/2018',
    horaIni: '14:00',
    horaFin: '15:00',
    local: 'Parcão',
  },
  {
    id: '56298',
    nome: 'Petterson Miler',
    rating: 5,
    data: '22/09/2018',
    horaIni: '22:00',
    horaFin: '00:00',
    local: 'Woods',
  },
];

const PasseiosPen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerHeader}>
      <TouchableOpacity
        onPress={() => {
          if (!navigation.state.isDrawerOpen) {
            navigation.dispatch(DrawerActions.openDrawer());
          } else {
            navigation.dispatch(DrawerActions.closeDrawer());
          }
        }}
        style={styles.iconBotaoAba}
      >
        <Icon name="ios-menu" size={30} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.textitulo}>
        <Text style={styles.header}>Passeios Pendentes</Text>
      </View>
    </View>
    <ScrollView>
      {passeios.map(item => (
        <ListPasseios
          key={item.id}
          nome={item.nome}
          rating={item.rating}
          data={item.data}
          horaIni={item.horaIni}
          horaFin={item.horaFin}
          local={item.local}
          navigation={navigation}
          pendente
        />
    ))}
    </ScrollView>
  </View>
);

export default PasseiosPen;
