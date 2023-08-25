import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const Gender = () => {
  const [gender, setGender] = useState("Unknown");
  const [showPicker, setShowPicker] = useState(false);

  const Navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#191414" }}>
      <View>
        <Text style={{ color: "#FFFFFF", fontSize: 25, fontWeight: "bold", padding: 10 }}>
          Whats your gender?
        </Text>
        <View
          style={{
            height: showPicker ? 120 : 60, // Adjust height if Picker is shown
            width: "90%",
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: "#b3b3b3",
            overflow: 'hidden' // Important for proper rendering
          }}
        >
          <TextInput
            placeholder="Select Gender"
            style={{ fontSize: 22, padding: 10, color: "#FFFFFF", backgroundColor: 'transparent' }}
            onFocus={() => setShowPicker(true)}
            value={gender !== "Unknown" ? gender : ""}
          />
          {showPicker && (
            <Picker
              selectedValue={gender}
              onValueChange={(value, index) => {
                setGender(value);
                setShowPicker(false);
              }}
              style={{ color: "#000", flex: 1 }}
            >
              <Picker.Item label="Select Gender" value="Unknown" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Not Willing" value="NA" />
            </Picker>
          )}
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: 100,
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginLeft: 130,
          }}
          onPress={() => Navigation.navigate("Name")}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10, color: "#191414" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Gender;
