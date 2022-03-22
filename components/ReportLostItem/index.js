import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import call from 'react-native-phone-call';

import styles from './styles';

const ReportLostItem = ({ pet }) => {
  console.log(pet.type);

  return (
    <View style={styles.petCareItem}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: pet.image }} />
        <Text>{'\n'}</Text>
      </View>
      <View>
      <Text style={styles.itemTitle}>Pet Name:{pet.petName}</Text>
      <Text style={styles.itemTitle}>Date Lost:{pet.dateLost}</Text>
      <Text style={styles.itemTitle}>Species:{pet.species}</Text>
      <Text style={styles.itemTitle}>Gender:{pet.gender}</Text>
      <Text style={styles.itemTitle}>Breed:{pet.breed}</Text>
      <Text style={styles.itemTitle}>Is there a microchip:{pet.isChip}</Text>
      <Text style={styles.itemTitle}>Address:{pet.address.title}</Text>
      <Text style={styles.itemTitle}>Contact Info:{pet.contactName}</Text>
      <Text style={styles.itemTitle}>Phone Number:{pet.contactPhone}</Text>
      </View>
    </View>
  )
};

export default ReportLostItem;