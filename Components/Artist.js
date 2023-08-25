import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Artist = ({ ArtistImage, ArtistName, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    const newState = !clicked;
    setClicked(newState);
    if (onClick && typeof onClick === "function") {
      onClick(newState, ArtistImage); // Pass the new state and the artist image to the parent callback
    }
  };

  return (
    <TouchableOpacity
      style={{
        height: 200,
        width: 150,
        marginVertical: 10,
        marginHorizontal: 8,
      }}
      onPress={handlePress} // Toggle the clicked state on press
    >
      {clicked && (
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 1,
            right: 10,
            top: 5,
          }}
        >
          <FontAwesome name="check" size={17} color="black" />
        </View>
      )}

      <Image
        source={ArtistImage}
        style={{ height: 150, width: 150, borderRadius: 90 }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#FFFFFF",
            paddingTop: 10,
          }}
        >
          {ArtistName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Artist;

const styles = StyleSheet.create({});
