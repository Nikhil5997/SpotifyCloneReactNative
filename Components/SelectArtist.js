import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Artist from "./Artist";
import { useNavigation } from "@react-navigation/native";

const SelectArtist = ({ ArtistImage, ArtistName }) => {
  const [selectedArtists, setSelectedArtists] = useState([]);

  const [selectedCount, setSelectedCount] = useState(0);
  const Navigation = useNavigation();

  const handleArtistClick = (wasSelected, artistImage) => {
    if (wasSelected) {
      setSelectedCount((prevCount) => Math.max(0, prevCount - 1));
      setSelectedArtists((prevArtists) =>
        prevArtists.filter((image) => image !== artistImage)
      );
    } else {
      setSelectedCount((prevCount) => prevCount + 1);
      setSelectedArtists((prevArtists) => [...prevArtists, artistImage]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#191414" }}>
      <ScrollView>
        <SafeAreaView>
          <View style={{ marginTop: 65, marginLeft: 10 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 30,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Choose 3 or more artists you like.
            </Text>
            <View
              style={{
                height: 50,
                width: "88%",
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                flexDirection: "row",
              }}
            >
              <EvilIcons
                name="search"
                size={34}
                color="black"
                style={{ padding: 8 }}
              />
              <TextInput
                placeholder="Search"
                style={{ padding: 8, fontSize: 20, color: "black" }}
              />
            </View>
          </View>
          <View style={{ margin: 20, flexWrap: "wrap", flexDirection: "row" }}>
            <Artist
              ArtistImage={require("../assets/sidhumoosewala.webp")}
              ArtistName={"Moosewala"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/Background.jpg")}
              ArtistName={"Arjit Singh"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/diljit-dosanjh.webp")}
              ArtistName={"Diljit Singh"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/permish.webp")}
              ArtistName={"Permish"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/kaka-1.webp")}
              ArtistName={"Kaka"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/singha.jpg")}
              ArtistName={"Singha"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/amrinder.jpg")}
              ArtistName={"Arminder Singh"}
              onClick={handleArtistClick}
            />
            <Artist
              ArtistImage={require("../assets/images.jpeg")}
              ArtistName={"Arjit Singh"}
              onClick={handleArtistClick}
            />
          </View>
        </SafeAreaView>
      </ScrollView>

      {selectedCount <= 3 && (
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={{
              height: 60,
              width: "60%",
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              marginBottom: 40,
              alignSelf: "center", // This will center the button horizontally
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
                color: "#191414",
              }}
            >
              Choose podcasts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() =>
              Navigation.navigate("GreatPick", { selectedArtists ,ArtistImage})
            }
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                padding: 10,
                color: "#FFFFFF",
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SelectArtist;
