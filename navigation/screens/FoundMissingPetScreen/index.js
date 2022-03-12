import React, { useState } from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firestore } from './../../../firebaseConfig';
import ImageSelector from '../../../components/ImageSelector/ImageSelector';
import styles from './styles';

const FoundMissingPetScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState();
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [dateFound, setDateFound] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');

  function saveToDatabase() {
    firestore
      .collection('reportFoundPet')
      .add({
        imageUri: imageUri,
        species: species,
        breed: breed,
        dateFound: dateFound,
        address: address,
        contactNumber: contactNumber,
        description: description
      })
      .then(() => {
        Alert.alert('Data has been uploaded successfully!');
      })
      .catch(function(error) {
        Alert.alert("Something went wrong!");
        console.log("Error: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} source={ require('../../../assets/data/images/background.jpg') } style={styles.background} >
        
        <ScrollView style={styles.form}>
          <Text style={styles.title}>Report a Found Pet</Text>

          <View style={styles.imageContainer}>
            <ImageSelector imageUri={imageUri} onChangeImage={ (uri) => setImageUri(uri) } />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Species</Text>
            <TextInput 
              style={styles.textInputShort} 
              placeholder='e.g. cat, dog, bird, rabbit'
              onChangeText={(value) => setSpecies(value)}
            />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Breed</Text>
            <TextInput 
              style={styles.textInputShort} 
              placeholder='e.g. Akita, Beagle'
              onChangeText={(value) => setBreed(value)}
            />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Date Found</Text>
            <TextInput 
              style={styles.textInputShort} 
              placeholder='MM/DD/YYYY'
              onChangeText={(value) => setDateFound(value)}
            />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput 
              style={styles.textInputShort} 
              placeholder='Enter the address where the pets was found'
              onChangeText={(value) => setAddress(value)}
            />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput 
              style={styles.textInputShort} 
              placeholder='xxx-xxx-xxxx'
              onChangeText={(value) => setContactNumber(value)}
            />
          </View>

          <View style={styles.smallContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput 
              style={styles.textInputShort} 
              multiline numberOfLines={5} 
              placeholder='Enter an additional information'
              onChangeText={(value) => setDescription(value)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.lostButton} activeOpacity={0.8} onPress={() => navigation.navigate("HomeNavigator")}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.foundButton} activeOpacity={0.8} onPress={saveToDatabase}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
        
      </ImageBackground>
    </View>
  )
};

export default FoundMissingPetScreen;
