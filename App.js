import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import Search from "./Components/Search";
import GetStarted from "./Components/GetStarted";
import Gender from "./Components/Gender"
import Name from "./Components/Name";
import SelectArtist from "./Components/SelectArtist"
import LandingPage from "./Components/LandingPage";
import GreatPick from "./Components/GreatPick";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#191414",

            // borderBottomWidth: 2, // Set the border width
            // borderBottomColor: "#000",
          },
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",

          headerTintColor: "#FFFFFF",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ title: "Create account" }}
        />
          <Stack.Screen
          name="Gender"
          component={Gender}
          options={{ title: "Create account" }}
        />
         <Stack.Screen
          name="Name"
          component={Name}
          options={{ title: "Create account" }}
        />
         <Stack.Screen
          name="SelectArtist"
          component={SelectArtist}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GreatPick"
          component={GreatPick}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
