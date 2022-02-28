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
      {/*<View style={styles.leftContainer}>*/}
      {/*  <Image style={styles.image} source={{ uri: contact.image }} />*/}
      {/*</View>*/}
      <View>
        <Text style={styles.itemTitle}>Type:{pet.type}</Text>
        <Text style={styles.state}>breed:{pet.breed}{"\n"}description:{pet.description}</Text>
      </View>
    </View>
  )
};

export default ReportItem;
