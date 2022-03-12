import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    color: Colors.colors.theme,
    position: 'absolute',
    top: '10%',
    left: '5%',
  },
  container: {
    width: '90%',
    height: '75%',
    position: 'absolute',
    top: '20%',
    backgroundColor: "white",
    opacity: 0.90,
    marginLeft: 20,
  },
  inputContainer:{
    width:"90%",
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    },
image:{
    width: 150,
    height: 150,
    marginLeft: '25%',
    marginTop: '20%',
},
textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
},
buttonContainer:{
  paddingLeft: 40,
  paddingRight: 40,
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between'
   },

   button:{
    padding: 15,

  },
});

export default styles;