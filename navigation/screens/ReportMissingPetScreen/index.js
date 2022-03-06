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
} from "react-native";
import { firestore } from "./../../../firebaseConfig";
import ImageSelector from "../../../components/ImageSelector/ImageSelector";
import DropDownPicker from "react-native-dropdown-picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";

// console.disableYellowBox = true;

LogBox.ignoreAllLogs();
DropDownPicker.setListMode("SCROLLVIEW");

const ReportMissingPetScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [petName, setPetName] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [isChip, setIsChip] = useState("");
  const [address, setAddress] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  function uploadData() {
    firestore
      .collection("reportLostPet")
      .add({
        image: image,
        petName: petName,
        dateLost: dateLost,
        species: species,
        gender: gender,
        breed: breed,
        isChip: isChip,
        address: address,
        contactInfo: contactInfo,
      })
      .then(() => {
        console.log("Data has been uploaded successfully!");
      })
      .catch(function (error) {
        Alert.alert("Something went wrong!");
        console.log("Error: ", error);
      });

    // remove the field's data
    setImage(null);
    setPetName("");
    setDateLost("");
    setSpecies("");
    setGender(null);
    setBreed("");
    setIsChip("");
    setAddress("");
    setContactInfo("");
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ImageBackground
          blurRadius={10}
          source={require("../../../assets/data/images/background.jpg")}
          style={styles.background}
        >
          <Text style={styles.title}>Report Missing Pet</Text>

          <View style={styles.bodyContainer}>
            <View>
              <Text style={styles.noticeStart}>Before You Start...</Text>
              <Text style={styles.noticeTxt}>
                1. All fields below are required.{"\n"}2. To make sure we don't
                make mistake your pet in the future, please{" "}
                <Text style={{ color: "#FB9A44" }}>
                  upload a photo of yourself with your pet
                </Text>
                .
              </Text>
            </View>

            <Text style={styles.cates}>YOUR PHOTO WITH PET</Text>
            <View style={styles.imageContainer}>
              <ImageSelector
                imageUri={image}
                onChangeImage={(uri) => setImage(uri)}
              />
            </View>

            <Text style={styles.cates}>Pet's Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your pet's name"
              value={petName}
              onChangeText={(value) => setPetName(value)}
            />

            <Text style={styles.cates}>Date Lost</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 2022.02.25"
              keyboardType="numeric"
              value={dateLost}
              onChangeText={(value) => setDateLost(value)}
            />

            <Text style={styles.cates}>Species</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. cat, dog, bird"
              value={species}
              onChangeText={(value) => setSpecies(value)}
            />

            <Text style={styles.cates}>Gender</Text>
            <View style={{ width: "92%", marginBottom: 7, marginTop: 2 }}>
              <DropDownPicker
                placeholder="Select a gender"
                placeholderStyle={{
                  color: "grey",
                }}
                open={open}
                value={gender}
                items={items}
                setOpen={setOpen}
                setItems={setItems}
                setValue={setGender}
              />
            </View>

            <Text style={styles.cates}>Breed</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. Akita, Beagle"
              value={breed}
              onChangeText={(value) => setBreed(value)}
            />

            <Text style={styles.cates}>Is there a microchip or tattoo</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. Yes or No"
              value={isChip}
              onChangeText={(value) => setIsChip(value)}
            />

            <Text style={styles.cates}>Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Where did you lose the pet?"
              value={address}
              onChangeText={(value) => setAddress(value)}
            />

            <Text style={styles.cates}>Contact Info</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your name, phone number (123) 456 7890"
              value={contactInfo}
              onChangeText={(value) => setContactInfo(value)}
            />

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => navigation.navigate("HomeNavigator")}
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

export default ReportMissingPetScreen;
