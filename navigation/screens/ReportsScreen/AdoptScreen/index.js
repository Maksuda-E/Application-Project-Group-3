import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';
import ReportItem from "../../../../components/ReportItem";
import { firestore } from "../../../../firebaseConfig";

const AdoptScreen = ({ navigation }) => {
    let [foundpets, setFoundpets] = useState([]);

    useEffect(() => {
        const subscriber = async () => {
            try {
                let result = [];
                let data = await firestore.collection('reportFoundPet').get();

                data.forEach(e => {
                    let foundDate = new Date(e.data().dateFound);
                    const today = new Date();

                    const diffTime = Math.abs(today - foundDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                    console.log(diffDays);

                    if (diffDays >= 30) {
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
            <ImageBackground source={require('../../../../assets/data/images/background.jpg')} style={styles.background} >
                <Text style={styles.title}>Report</Text>

                <Text style={styles.subTitle}>Pets looking for a home</Text>
                <ScrollView>
                    {
                        foundpets.map((pet) =>
                            <TouchableOpacity key={pet.id} pet={pet} onPress={() => navigation.navigate("AdoptForm")}>
                                <ReportItem pet={pet} />
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>

            </ImageBackground>
        </View>
    )
};

export default AdoptScreen;
