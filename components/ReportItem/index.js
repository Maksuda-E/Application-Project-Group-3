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
        <Text style={styles.itemTitle}>gender:{pet.gender}</Text>
          <Text style={styles.itemTitle}>contactName:{pet.contactName}</Text>
          <Text style={styles.itemTitle}>contactPhone:{pet.contactPhone}</Text>
          <Text style={styles.itemTitle}>breed:{pet.breed}</Text>
          <Text style={styles.itemTitle}>dateFound:{pet.dateFound}</Text>
        {/*<Text style={styles.itemTitle}>description:{pet.description}</Text>*/}
      </View>
    </View>
  )
};

export default ReportItem;
