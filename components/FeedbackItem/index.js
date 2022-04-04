import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

const FeedbackItem = ({ feedback }) => {
    console.log(feedback.type);
  return (
    <View style={styles.feedbackItem}>
      <View>
      <Text style={styles.itemTitle}>{feedback.name}</Text>
      <Text style={styles.itemTitle}>{feedback.rating}</Text>
      <Text style={styles.itemTitle}>{feedback.message}</Text>
      </View>
    </View>
  )

};

export default FeedbackItem ;