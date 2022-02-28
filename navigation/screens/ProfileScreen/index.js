import React, { useState } from 'react';
import { 
  View, 
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth, firestore } from '../../../firebaseConfig';

import styles from './styles';


const ProfileScreen = ({navigation}) => {

   const [image, setImage] = useState(null);
   const [firstname, setFirstName] = useState('');
   const [lastname, setLastName] = useState('');
   const [address, setAddress] = useState('');
   const [contactnumber, setContact] = useState('');

   var userId = auth.currentUser.uid;

   firestore.collection("users").doc(userId).get()
   .then(function (doc) {
     if (doc.exists) {
       setImage(doc.data().image);
       setFirstName(doc.data().firstname);
       setLastName(doc.data().lastname);
       setAddress(doc.data().address);
       setContact(doc.data().contactnumber);
       console.log("Document data:", doc.data());
     } else {
       console.log("No such document!");
     }
   })
   .catch(function (error) {
     console.log("Error getting document:", error);
   });

  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}

  return (
    <View>
     <ImageBackground source={ require('../../../assets/data/images/background.jpg') } 
      style={styles.background} >
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
       </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')}>
          <Text style={styles.buttonText1}>Update Profile</Text>
       </TouchableOpacity>
      <View style={styles.container}>  
       <Text>{"\n"}{"\n"}</Text>
       <View style={styles.inputContainer} >
        <Image style={styles.image} source={{ uri: image }}/>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          numberOfLines={3}
          onChangeText={(value) => setFirstName(value) }
          value={firstname}
          style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray' }}
        />
       <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          numberOfLines={3}
          onChangeText={(value) => setLastName(value) }
          value={lastname}
          style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray' }}
        />
       <TextInput
         style={styles.textInput}
         placeholder="Present Address"
         numberOfLines={3}
         onChangeText={(value) => setAddress(value) }
         value={address}
         style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray' }}
        />
       <TextInput
         style={styles.textInput}
         placeholder="Contact Number"
         numberOfLines={3}
         onChangeText={(value) => setContact(value) }
         value={contactnumber}
        style={{ borderBottomWidth: 0.5, borderBottomColor: 'gray' }}
       />
     </View>
   </View>
 </ImageBackground>
 </View>
  )
};

export default ProfileScreen;
