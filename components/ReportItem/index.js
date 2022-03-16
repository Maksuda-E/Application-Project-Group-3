import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import call from 'react-native-phone-call';

import styles from './styles';

const ReportItem = ({ pet }) => {
  console.log(pet.type);

  return (
    <View style={styles.petCareItem}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: pet.imageUri }} />
      </View>
      <View>
        <Text style={styles.itemTitle}>species:{pet.species}</Text>
          <Text style={styles.itemTitle}>address:{pet.address}</Text>
          <Text style={styles.itemTitle}>contactNumber:{pet.contactNumber}</Text>
          <Text style={styles.itemTitle}>breed:{pet.breed}</Text>
          <Text style={styles.itemTitle}>dateFound:{pet.dateFound}</Text>
        <Text style={styles.itemTitle}>description:{pet.description}</Text>
      </View>
    </View>
  )
};

export default ReportItem;
