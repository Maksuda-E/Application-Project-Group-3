import React, { useEffect, useState } from "react";
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
import { firestore, storage } from "./../../../firebaseConfig";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./styles";

const ReportMissingPetScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [petName, setPetName] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [species, setSpecies] = useState("");
  const [Gender, setGender] = useState("");
  const [colour, setColour] = useState("");
  const [isChip, setIsChip] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function uploadData() {
    storage
      .ref(image.split("/").pop())
      .put(setImage)
      .then(() => {
        console.log(`${image} has been succussfully uploaded`);
      })
      .catch((err) => console.log("uploading image error => ", err));

    firestore
      .collection("reportLostPet")
      .set(
        {
          image: image,
          petName: petName,
          dateLost: dateLost,
          species: species,
          Gender: Gender,
          colour: colour,
          isChip: isChip,
        },
        {
          merge: true,
        }
      )
      .then(function () {
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

            <View style={styles.btnContainer}>
              {/* <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Image source={{ uri: image }} />

                <Text style={styles.btnText}>UPLOAD PET'S PHOTO</Text>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.button} onPress={pickImage}>
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
