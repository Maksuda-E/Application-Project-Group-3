import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  feedbackItem: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 13,
    color: Colors.colors.dark,
    fontWeight: 'bold',
  },
 
});

export default styles;