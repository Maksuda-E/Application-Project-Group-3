import React from 'react';
import { 
  View, 
  Text,
  ImageBackground,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';

const ReportsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ require('../../../assets/data/images/background.jpg') } style={styles.background} >
        <Text style={styles.title}>Report</Text>
      </ImageBackground>
    </View>
  )
};

export default ReportsScreen;
