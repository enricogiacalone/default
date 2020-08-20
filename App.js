import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/navigations/AppNavigation";
import Config from "react-native-config";
import SplashScreen from "react-native-splash-screen";

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    const env = Config.ENV;
    return <AppContainer />;
  }
}
