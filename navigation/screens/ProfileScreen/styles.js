import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '69%',
    position: 'absolute',
    top: '30%',
    backgroundColor: "white",
    opacity: 0.90,
    marginLeft: 20,
  },
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
  buttonText:{
    color:"black",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 300,
    paddingLeft: 20,
    paddingBottom: 10,
    opacity: 0.55,
   },
   buttonText1:{
    color:"black",
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 690,
    paddingLeft: 20,
    opacity: 0.55,
   },
   inputContainer:{
    width:"90%",
    marginRight: 20,
    marginLeft: 20,
    },
  image: {
    width: 150,
    height: 150,
    marginLeft: 70,
    marginTop: 20,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top',
},
 
});

export default styles;
