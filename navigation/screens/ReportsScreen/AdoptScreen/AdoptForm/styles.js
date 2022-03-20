import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../../../constants/Colors";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: Dimensions.get("screen").height,
    resizeMode: "cover",
  },

  title: {
    fontSize: 30,
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: Colors.colors.dark,
    top: "4%",
    textAlign: "center",
  },

  bodyContainer: {
    marginTop: "12%",
    flex: 1,
    marginHorizontal: 20,
    width: "98%",
  },

  textInput: {
    marginTop: 3,
    width: "92%",
    paddingVertical: 5,
    paddingLeft: 7,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    // fontSize: 16,
    borderRadius: 4,
  },

  cates: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.colors.dark,
  },

  btnContainer: {
    display: "flex",
    marginTop: 15,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    paddingHorizontal: 30,
  },

  imageContainer: {
    marginBottom: 10,
    alignSelf: "center",
    width: 390,
  },

  button: {
    alignItems: "center",
    backgroundColor: Colors.colors.dark,
    padding: 10,
    marginBottom: 25,
    borderRadius: 15,
    width: "40%",
  },

  cancelBtn: {
    alignItems: "center",
    backgroundColor: Colors.colors.red,
    padding: 10,
    marginBottom: 25,
    borderRadius: 15,
    width: "40%",
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
    marginBottom: 15,
  },

  datePickerStyle: {
    marginTop: 3,
    width: "92%",
    paddingVertical: 2,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 4,
  },

  error: {
    color: "red",
    fontStyle: "italic",
  }
});

export default styles;
