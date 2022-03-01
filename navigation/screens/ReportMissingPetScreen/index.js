import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firestore } from "./../../../firebaseConfig";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";

const ReportMissingPetScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [petName, setPetName] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [species, setSpecies] = useState("");
  const [Gender, setGender] = useState("");
  const [colour, setColour] = useState("");
  const [isChip, setIsChip] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const verifyPermission = async () => {
    const cameraResult = await ImagePicker.requestCameraPermissionsAsync();
    const libraryResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (
      cameraResult.status !== "granted" &&
      libraryResult.status !== "granted"
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const retrieveImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return false;
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!image.cancelled) {
      setImage(image.uri);
    }
  };

  function uploadData() {
    firestore
      .collection("reportLostPet")
      .add({
        image: image,
        petName: petName,
        dateLost: dateLost,
        species: species,
        Gender: Gender,
        colour: colour,
        isChip: isChip,
        contactInfo: contactInfo,
      })
      .then(() => {
        console.log("Data has been uploaded successfully!");
      })
      .catch(function (error) {
        Alert.alert("Something went wrong!");
        console.log("Error: ", error);
      });
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../../assets/data/images/background.jpg")}
          style={styles.background}
        >
          <Text style={styles.title}>Report Missing Pet</Text>

          <View style={styles.bodyContainer}>
            <View>
              <Text style={styles.noticeStart}>Before You Start...</Text>
              <Text style={styles.noticeTxt}>
                1. Fields below are required filled.{"\n"}2. To make sure we
                don't make mistake your pet in the future, please{" "}
                <Text style={{ color: "#FB9A44" }}>
                  upload a photo of yourself with your pet
                </Text>
                .
              </Text>
            </View>
            <Text style={styles.vitals}>Pet Vitals</Text>

            <Text style={styles.cates}>Pet's Name:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your pet's name"
              value={petName}
              onChangeText={(value) => setPetName(value)}
            />

            <Text style={styles.cates}>Date Lost:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 2022.02.25"
              keyboardType="numeric"
              value={dateLost}
              onChangeText={(value) => setDateLost(value)}
            />

            <Text style={styles.cates}>Species:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. cat/dog/bird"
              value={species}
              onChangeText={(value) => setSpecies(value)}
            />

            <Text style={styles.cates}>Gender:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. male/female"
              value={Gender}
              onChangeText={(value) => setGender(value)}
            />

            <Text style={styles.cates}>Coat Colour:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. tabby/calico"
              value={colour}
              onChangeText={(value) => setColour(value)}
            />

            <Text style={styles.cates}>Is there a microchip or tattoo?</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. yes/no"
              value={isChip}
              onChangeText={(value) => setIsChip(value)}
            />

            <Text style={styles.cates}>Contact Info</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. your name/your phone number"
              value={contactInfo}
              onChangeText={(value) => setContactInfo(value)}
            />

            <View style={styles.btnContainer}>
              {/* <TouchableOpacity style={styles.button} onPress={retrieveImageHandler}>
                <Image source={{ uri: image }} />
                <Text style={styles.btnText}>UPLOAD PET'S PHOTO</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={styles.button}
                onPress={retrieveImageHandler}
              >
                <Text style={styles.btnText}>YOUR PHOTO WITH PET</Text>
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
