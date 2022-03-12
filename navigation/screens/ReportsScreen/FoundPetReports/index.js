import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground, ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import ReportItem from "../../../../components/ReportItem";
import {firestore} from "../../../../firebaseConfig";

const FoundPetReports = ({navigation}) => {
    let [foundpets, setFoundpets] = useState([]);

    useEffect(() => {
        const subscriber = async () => {
            try {
                let result = [];
                // let data = await firestore.collection('missingPets').get();
                let data = await firestore.collection('reportFoundPet').get();

                data.forEach(e => {

                    // if (e.id) {
                    //     result.push({
                    //         id: e.id,
                    //         type: e.data().type,
                    //         breed: e.data().breed,
                    //         description: e.data().description,
                    //     });
                    // }
                    if (e.id) {
                        result.push({
                            id: e.id,
                            address: e.data().address,
                            breed: e.data().breed,
                            contactNumber: e.data().contactNumber,
                            dateFound: e.data().dateFound,
                            description: e.data().description,
                            imageUri: e.data().imageUri,
                            species: e.data().species,
                        });
                    }
                })

                setFoundpets(result);
            } catch (err) {
                console.log(err);
            }
        }
        subscriber();
    }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={ require('../../../../assets/data/images/background.jpg') } style={styles.background} >
        <Text style={styles.title}>Report</Text>

          <Text style={styles.subTitle}>Found Pets List</Text>
          <ScrollView>
              {
                  foundpets.map((pet) =>
                      <ReportItem key={pet.id} pet={pet} />)
              }
          </ScrollView>

      </ImageBackground>
    </View>
  )
};

export default FoundPetReports;
