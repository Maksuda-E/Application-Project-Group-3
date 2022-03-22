import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Pressable,
    TextInput,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import ReportItem from "../../../../components/ReportItem";
import { firestore } from "../../../../firebaseConfig";

const FoundPetReports = ({ navigation }) => {
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
                            petName: e.data().petName,
                            species: e.data().species,
                            address: e.data().address,
                            breed: e.data().breed,
                            contactName: e.data().contactName,
                            contactPhone: e.data().contactPhone,
                            dateFound: e.data().dateFound,
                            gender: e.data().gender,
                            isChip: e.data().isChip,
                            imageUri: e.data().imageUri,
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
            <ImageBackground source={require('../../../../assets/data/images/background.jpg')} style={styles.background} >
                <Text style={styles.title}>Report</Text>

                <Text style={styles.subTitle}>Found Pets List</Text>
                <View style={{ marginHorizontal: '5%'}}>
                    <Text>There are many homeless pets that need your help. You felt in love with our pets and want to give them a home?
                        <Text style={styles.adoptText} onPress={() => navigation.navigate("AdoptReports")}> Click here to adopt a pet!</Text>
                    </Text>
                </View>
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
