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
      {/*<View style={styles.leftContainer}>*/}
      {/*  <Image style={styles.image} source={{ uri: pet.image }} />*/}
      {/*</View>*/}
      <View>
        <Text style={styles.itemTitle}>species:{pet.species}</Text>
          <Text style={styles.itemTitle}>petName:{pet.petName}</Text>
        <Text style={styles.itemTitle}>colour:{pet.colour}</Text>
        <Text style={styles.itemTitle}>contactInfo:{pet.contactInfo}</Text>
        <Text style={styles.itemTitle}>isChip:{pet.isChip}</Text>
        <Text style={styles.itemTitle}>Gender:{pet.Gender}</Text>
        <Text style={styles.itemTitle}>dateLost:{pet.dateLost}</Text>
      </View>
    </View>
  )
};

export default ReportLostItem;
