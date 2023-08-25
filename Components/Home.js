import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Platform,
  Button,
  View,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        source={require("../assets/images.jpeg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View
          style={{
            marginTop: 360,
            // backgroundColor:"red"
          }}
        >
          <Text style={styles.text}>
            Enjoy your {"\n"}favorite {"\n"}music
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "#1DB954",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              // marginTop:60
            }}
            onPress={() => navigation.navigate('GetStarted')}

          >
            <Text
              style={{
                fontSize: 16,
                color: "#191414",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              // backgroundColor: "#191414",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              borderColor: "#1DB954",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#1DB954",
              }}
            >
              Continue with Email
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                // fontWeight: "bold",
                marginTop: 20,
                color: "#535353",
              }}
            >
              By Continuing you agree to do the Terms
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#535353",
              }}
            >
              of Service & Privacy Policy
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "red" : "transparent",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Home;
