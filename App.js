import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppProvider from "./Context/Context";
import Home from "./Componentes/Home";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./Navigation/BottomTab";
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
      <BottomTabNav></BottomTabNav>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
