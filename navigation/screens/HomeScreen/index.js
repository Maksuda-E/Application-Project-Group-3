import React from 'react';
import { 
  View, 
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';


import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={ require('../../../assets/data/images/background.jpg') } style={styles.background} >
        <Text style={styles.title}>App Name</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.lostButton} activeOpacity={0.8} onPress={() => navigation.navigate("ReportMissingPet")}>
            <Text style={styles.buttonText}>Lost My Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foundButton} activeOpacity={0.8} onPress={() => navigation.navigate("FoundMissingPet")}>
            <Text style={styles.buttonText}>Found A Pet</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

export default HomeScreen;
