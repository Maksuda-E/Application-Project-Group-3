import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LogBox,
  Alert,
} from "react-native";
import { firestore } from "./../../../../../firebaseConfig";
import ImageSelector from "../../../../../components/ImageSelector/ImageSelector";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-datepicker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import * as FileSystem from "expo-file-system";

LogBox.ignoreAllLogs();
DropDownPicker.setListMode("SCROLLVIEW");

const AdoptForm = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  // Finance option
  const [finance, setFinance] = useState(null);
  const [financeOpen, setFinanceOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Yes", value: true },
    { label: "No", value: false },
  ]);

  async function uploadData() {
    let error = [];

    if (name === "") {
      error.push("Your name");
    }

    if (address === "") {
      error.push("Your address");
    }

    if (reason === "") {
      error.push("Your reason to adopt this pet");
    }

    if (phone === "") {
      error.push("Your phone number");
    }

    if (!finance) {
      error.push("Your financial capabilities to raise this pet");
    }

    if (error.length > 0) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);

      firestore
        .collection("adoptRequests")
        .add({
          id: route.params.id,
          name,
          phone,
          address,
          reason,
          finance,
        })
        .then(() => {
          Alert.alert(
            "Submission successful",
            "Thank you for considering adopting our pet. We will proceed your application and get back as soon as possible.",
            [
              { text: "OK", onPress: () => navigation.navigate("AdoptReports") }
            ]
          );
        })
        .catch(function (error) {
          Alert.alert("Something went wrong!");
          console.log("Error: ", error);
        });

      // remove the field's data
      setName("");
      setPhone("");
      setAddress("");
      setReason("");
      setFinance(null);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ImageBackground
          blurRadius={10}
          source={require("../../../../../assets/data/images/background.jpg")}
          style={styles.background}
        >
          <Text style={styles.title}>Report Missing Pet</Text>

          <View style={styles.bodyContainer}>
            <View>
              <Text style={styles.noticeTxt}>
                Click on the pet you want to adopt to proceed.
              </Text>
            </View>

            <View style={{marginBottom: '2%'}}>
              {errorMessage && 
                <Text style={styles.error}>
                  You are missing some information. Please let us know:
                </Text>}
              {errorMessage &&
                (errorMessage.map(
                  (error, index) => (
                    <Text style={styles.error} key={index}>* {error}</Text>
                  )
                ))}
            </View>

            <Text style={styles.cates}>Full Name:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your name"
              value={name}
              onChangeText={(value) => setName(value)}
            />

            <Text style={styles.cates}>Phone Number:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 416-456-7890"
              value={phone}
              onChangeText={(value) => setPhone(value)}
            />

            <Text style={styles.cates}>Address:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your address"
              value={address}
              onChangeText={(value) => setAddress(value)}
            />

            <Text style={styles.cates}>Reason:</Text>
            <TextInput
              style={styles.textInput}
              multiline numberOfLines={5}
              placeholder="Why do want to adopt this pet?"
              value={reason}
              onChangeText={(value) => setReason(value)}
            />

            <Text style={styles.cates}>Are you able to raise a pet?</Text>
            <View
              style={{
                width: "92%",
                marginBottom: 7,
                marginTop: 2,
              }}
            >
              <DropDownPicker
                zIndex={2000}
                zIndexInverse={2000}
                placeholder="Select an option"
                placeholderStyle={{
                  color: "grey",
                }}
                style={{
                  borderColor: "transparent",
                  height: 40,
                  borderRadius: 6,
                }}
                open={financeOpen}
                value={finance}
                items={items}
                setOpen={setFinanceOpen}
                setItems={setItems}
                setValue={setFinance}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => navigation.navigate("AdoptReports")}
              >
                <Text style={styles.btnSubmit}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={uploadData}>
                <Text style={styles.btnSubmit}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdoptForm;
