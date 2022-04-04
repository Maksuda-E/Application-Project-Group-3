import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import FeedbackItem from "../../../../components/FeedbackItem";
import { firestore } from "../../../../firebaseConfig";


const FeedbackReport = ({ navigation }) => {
    let [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const subscriber = async () => {
          try {
              let result = [];
              // let data = await firestore.collection('missingPets').get();
              let data = await firestore.collection('feedback').get();
  
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
                              name: e.data().name,
                              rating: e.data().rating,
                              message: e.data().message,
                              
                          });
                      }
                  })
  
                  setFeedbackList(result);
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
               
                <ScrollView>
                    {
                        feedbackList.map((feedback) =>
                            <FeedbackItem key={feedback.id} feedback={feedback} />)
                    }
                </ScrollView>

            </ImageBackground>
        </View>
    )
};

export default FeedbackReport;
