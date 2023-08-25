import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const GetStarted = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log("Selected Date: ", currentDate); // Add this line
    setDate(currentDate);
    setShow(false);
  };

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
          Whats your date of birth?
        </Text>
        <View
          style={{
            height: 60,
            width: "90%",
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: "#b3b3b3",
          }}
        >
          <TextInput
            value={date.toLocaleDateString()} // Display the formatted date
            placeholder="09/02/1999"
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              color: "#FFFFFF",
            }}
            onFocus={() => setShow(true)}
          />
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="inline"
            onChange={onChange}
          />
        )}
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
          onPress={() => Navigation.navigate("Gender")}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
              color: "#191414",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
