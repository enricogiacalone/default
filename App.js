import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/navigations/AppNavigation";
import Config from "react-native-config";

export default function App() {
  const env = Config.ENV;
  return <AppContainer />;
}
