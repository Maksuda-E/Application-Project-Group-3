import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: Colors.colors.theme,
    position: "absolute",
    top: "10%",
    left: "5%",
  },

  container: {
    marginTop: -30,
  },

  bodyContainer: {
    // marginLeft: 20,
    marginTop: 140,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: 200,
    padding: 6,
    backgroundColor: "white",
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 6,
  },

  vitals: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.colors.light,
  },

  cates: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.colors.red,
  },

  btnContainer: {
    display: "flex",
    width: "100%",
    marginTop: 15,
  },

  button: {
    alignItems: "center",
    backgroundColor: Colors.colors.theme,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    maxWidth: "100%",
  },

  btnText: {
    color: "white",
    fontSize: 16,
  },

  btnSubmit: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  noticeStart: {
    fontSize: 18,
    color: Colors.colors.light,
    fontWeight: "600",
    fontStyle: "italic",
  },

  noticeTxt: {
    fontSize: 14,
    color: Colors.colors.light,
    marginBottom: 10,
  },
});

export default styles;
