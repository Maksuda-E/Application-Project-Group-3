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
        <Text style={styles.state}>breed:{pet.breed}{"\n"}description:{pet.description}</Text>
        <Text style={styles.state}>address:{pet.address}</Text>
        <Text style={styles.state}>contactNumber:{pet.contactNumber}</Text>
        <Text style={styles.state}>dateFound:{pet.dateFound}</Text>
      </View>
    </View>
  )
};

export default ReportItem;
