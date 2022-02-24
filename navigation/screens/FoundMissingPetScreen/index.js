import React from 'react';
import { 
  View, 
  Text,
  ImageBackground,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';

const FoundMissingPetScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ require('../../../assets/data/images/background.jpg') } style={styles.background} >
        <Text style={styles.title}>Found Missing Pet</Text>
      </ImageBackground>
    </View>
  )
};

export default FoundMissingPetScreen;
