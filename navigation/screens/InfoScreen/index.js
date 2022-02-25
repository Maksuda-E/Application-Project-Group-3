import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import call from 'react-native-phone-call';

import styles from './styles';
import QuickContact from '../../../components/QuickContact';
import petcareCenters from '../../../assets/data/petcareCenters';
import { firestore } from '../../../firebaseConfig';

const InfoScreen = ({ navigation }) => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    const subscriber = async () => {
      try {
        const result = [];
        const data = await firestore.collection('petcareCenters').get();
        
          data.forEach(e => {
            
            if (e.id) {
              result.push({
                id: e.id,
                name: e.data().name,
                image: e.data().image,
                address: e.data().address,
                state: e.data().state,
                phone: e.data().phone,
              });
            }
          })

          setContacts(result);
      } catch (err) {
        console.log(err);
      }
    }
    subscriber();
  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/data/images/background.jpg')} style={styles.background} >
        <Text style={styles.title}>Info</Text>
        <Text style={styles.subTitle}>About Us</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={styles.subTitle}>Contacts</Text>

        <ScrollView>
          {
            contacts.map((contact) =>
            <QuickContact contact={contact} />)
          }
        </ScrollView>
      </ImageBackground>
    </View>
  )
};

export default InfoScreen;
