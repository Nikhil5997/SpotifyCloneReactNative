import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";

const GreatPick = ({ route }) => {
    const { selectedArtists } = route.params; 

    // Take only the first 3 selected artists
    const displayedArtists = selectedArtists.slice(0, 3);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#191414" }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 300,
                    paddingRight: 30,
                }}
            >
                {displayedArtists.map((artistImage, index) => (
                    <Image
                        key={index}
                        source={artistImage}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 100,
                            marginLeft: index !== 0 ? 28 : 0, 
                            zIndex: index === 0 ? 1 : 0, 
                            position: index === 0 ? "absolute" : "relative" 
                        }}
                    />
                ))}
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                }}
            >
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontSize: 30,
                        fontWeight: "bold",
                    }}
                >
                    Great picks!
                </Text>
            </View>
        </SafeAreaView>
    );
};


export default GreatPick;

const styles = StyleSheet.create({});
