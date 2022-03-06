import React, { useState, useCallback } from "react";
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

LogBox.ignoreAllLogs();
DropDownPicker.setListMode("SCROLLVIEW");

const ReportMissingPetScreen = ({ navigation }) => {
  const [petImage, setPetImage] = useState(null);
  const [image, setImage] = useState(null);
  const [petName, setPetName] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [isChip, setIsChip] = useState("");
  const [address, setAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  //For gender dropdown box
  const [genderOpen, setGenderOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  // For species dropdown Box
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const [itemSpecies, setItemSpecies] = useState([
    { label: "Bird", value: "bird" },
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Guinea Pig", value: "guinea pig" },
    { label: "Rabbit", value: "rabbit" },
  ]);

  // For mirochip or not
  const [chipOpen, setChipOpen] = useState(false);
  const [itemChip, setItemChip] = useState([
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ]);

  const onSpeciesOpen = useCallback(() => {
    setGenderOpen(false);
    setChipOpen(false);
  }, []);

  const onGenderOpen = useCallback(() => {
    setSpeciesOpen(false);
    setChipOpen(false);
  }, []);

  const onChipOpen = useCallback(() => {
    setSpeciesOpen(false);
    setGenderOpen(false);
  }, []);

  function uploadData() {
    firestore
      .collection("reportLostPet")
      .add({
        petImage: petImage,
        image: image,
        petName: petName,
        dateLost: dateLost,
        species: species,
        gender: gender,
        breed: breed,
        isChip: isChip,
        address: address,
        contactName: contactName,
        contactPhone: contactPhone,
      })
      .then(() => {
        console.log("Data has been uploaded successfully!");
      })
      .catch(function (error) {
        Alert.alert("Something went wrong!");
        console.log("Error: ", error);
      });

    // remove the field's data
    setPetImage(null);
    setImage(null);
    setPetName("");
    setDateLost("");
    setSpecies(null);
    setGender(null);
    setBreed("");
    setIsChip("");
    setAddress("");
    setContactName("");
    setContactPhone("");
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

            <Text style={styles.cates}>YOUR PET'S PHOTO</Text>
            <View style={styles.imageContainer}>
              <ImageSelector
                imageUri={petImage}
                onChangeImage={(uri) => setPetImage(uri)}
              />
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
            <View
              style={{
                width: "92%",
                marginBottom: 7,
                marginTop: 2,
              }}
            >
              <DropDownPicker
                zIndex={3000}
                zIndexInverse={1000}
                placeholder="Select a species"
                placeholderStyle={{
                  color: "lightgrey",
                }}
                style={{
                  borderColor: "transparent",
                  height: 40,
                  borderRadius: 6,
                }}
                open={speciesOpen}
                onOpen={onSpeciesOpen}
                value={species}
                items={itemSpecies}
                setOpen={setSpeciesOpen}
                setItems={setItemSpecies}
                setValue={setSpecies}
              />
            </View>

            <Text style={styles.cates}>Gender</Text>
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
                placeholder="Select a gender"
                placeholderStyle={{
                  color: "lightgrey",
                }}
                style={{
                  borderColor: "transparent",
                  height: 40,
                  borderRadius: 6,
                }}
                open={genderOpen}
                onOpen={onGenderOpen}
                value={gender}
                items={items}
                setOpen={setGenderOpen}
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

            <Text style={styles.cates}>Is there a microchip?</Text>
            <View
              style={{
                width: "92%",
                marginBottom: 7,
                marginTop: 2,
              }}
            >
              <DropDownPicker
                zIndex={1000}
                zIndexInverse={3000}
                placeholder="Select an item"
                placeholderStyle={{
                  color: "lightgrey",
                }}
                style={{
                  borderColor: "transparent",
                  height: 40,
                  borderRadius: 6,
                }}
                open={chipOpen}
                onOpen={onChipOpen}
                value={isChip}
                items={itemChip}
                setOpen={setChipOpen}
                setItems={setItemChip}
                setValue={setIsChip}
              />
            </View>

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
              placeholder="Your name"
              value={contactName}
              onChangeText={(value) => setContactName(value)}
            />

            <Text style={styles.cates}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 416-456-7890"
              value={contactPhone}
              onChangeText={(value) => setContactPhone(value)}
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
