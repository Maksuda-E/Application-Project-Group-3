import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground, ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import {firestore} from "../../../../firebaseConfig";
import ReportLostItem from "../../../../components/ReportLostItem";

const MissingPetReports = ({navigation}) => {
    let [missingpets, setMissingpets] = useState([]);

    useEffect(() => {
        const subscriber = async () => {
            try {
                let result = [];

                // data = await firestore.collection('foundPets').get();
                let data = await firestore.collection('reportLostPet').get();

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
                            Gender: e.data().Gender,
                            colour: e.data().colour,
                            contactInfo: e.data().contactInfo,
                            dateLost: e.data().dateLost,
                            isChip: e.data().isChip,
                            petName: e.data().petName,
                            image: e.data().image,
                            species: e.data().species,
                        });
                    }
                })

                setMissingpets(result);
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

          <Text style={styles.subTitle}>Missing Pets List</Text>
          <ScrollView>
              {
                  missingpets.map((pet) =>
                      <ReportLostItem key={pet.id} pet={pet} />)
              }
          </ScrollView>

      </ImageBackground>
    </View>
  )
};

export default MissingPetReports;
