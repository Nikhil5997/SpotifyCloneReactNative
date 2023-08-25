import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const Navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#191414",
      }}
    >
      <View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 25,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Whats your name?
        </Text>
        <View
          style={{
            height: 60,
            width: "90%",
            marginHorizontal: 10,
            borderRadius: 7,
            backgroundColor: "#535353",
          }}
        >
          <TextInput
            placeholder="Nikhil Oberoi"
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              color: "#FFFFFF",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              marginTop: 9,
            }}
          >
            This appears on your profile
          </Text>
        </View>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              marginTop: 20,
              lineHeight: 20,
            }}
          >
            Spotify is a personalized service.By tapping on "Create account",you
            agree to the Spotify Terms and use
          </Text>
          <Text
            style={{
              color: "#1DB954",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Terms of Use
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              marginTop: 20,
              lineHeight: 20,
            }}
          >
            To Learn more about how Spotify collects,use,share and protects your
            personal data,please see the Spotify Privacy Policy
          </Text>

          <Text
            style={{
              color: "#1DB954",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Privacy Policy
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                marginTop: 20,
                lineHeight: 20,
                width: "70%",
              }}
            >
              I would prefer not to receive marketing messages from Spotify.
            </Text>
            <TouchableOpacity
              onPress={() => setIsClicked(!isClicked)}
              style={{
                height: 30,
                width: 30,
                borderColor: "#b3b3b3",
                borderWidth: 2,
                borderRadius: 30,
                backgroundColor: isClicked ? "#191414" : "#1DB954",
              }}
            ></TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                marginTop: 20,
                lineHeight: 20,
              }}
            >
              Share my registration data with Spotify's content provider for
              marketing purpose
            </Text>
            <TouchableOpacity
              onPress={() => setIsSelected(!isSelected)}
              style={{
                height: 30,
                width: 30,
                borderColor: "#b3b3b3",
                borderWidth: 2,
                borderRadius: 30,
                backgroundColor: isSelected ? "#191414" : "#1DB954",
              }}
            ></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: "60%",
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 120,
            marginLeft: 70,
          }}
          onPress={() => Navigation.navigate("SelectArtist")}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              color: "#191414",
            }}
          >
            Create account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
