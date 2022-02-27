import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles";

const ReportMissingPetScreen = ({ navigation }) => {
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
                don't mistake your pet in the future, please{" "}
                <Text style={{ color: "#FB9A44" }}>
                  upload a photo of your pet
                </Text>{" "}
                and a{" "}
                <Text style={{ color: "#FB9A44" }}>
                  picture of yourself with your pet
                </Text>
                .
              </Text>
            </View>
            <Text style={styles.vitals}>Pet Vitals</Text>

            <Text style={styles.cates}>Pet's Name:</Text>
            <TextInput style={styles.textInput} placeholder="Your pet's name" />

            <Text style={styles.cates}>Date Lost:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. 2022.02.25"
              keyboardType="numeric"
            />

            <Text style={styles.cates}>Species:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. cat/dog/bird"
            />

            <Text style={styles.cates}>Gender:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. male/female"
            />

            <Text style={styles.cates}>Coat Colour:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. tabby/calico"
            />

            <Text style={styles.cates}>Is there a microchip or tattoo?</Text>
            <TextInput style={styles.textInput} placeholder="e.g. yes/no" />

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
              >
                <Text style={styles.btnText}>UPLOAD PET'S PHOTO</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
              >
                <Text style={styles.btnText}>YOUR PHOTO WITH PET</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                // onPress={onPress}
              >
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
