import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 15,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    color: Colors.colors.dark,
    marginTop: '15%',
    marginHorizontal: '5%',
    textAlign: 'center',

  },
  lostButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: Colors.colors.red,
    borderRadius: 15,
  },
  foundButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.colors.dark,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 13
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.colors.dark,
    paddingBottom: 2,
    paddingLeft: 3,
  },
  textInputShort: {
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    textAlignVertical: 'center',
    paddingLeft: 7,
    paddingTop: 2
  },
  imageContainer: {
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center'
  },
  smallContainer: {
    marginBottom: 8
  }

});

export default styles;
