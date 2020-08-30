import React, { Component } from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { notificationManager } from "../../notificationManager/NotificationManager";

export default class ViewIngredientsButton extends Component {
  constructor(props) {
    super(props);
    this.localNotify = null;
  }

  componentDidMount() {
    this.localNotify = notificationManager;
    this.localNotify.configure(
      this.onRegister,
      this.onNotification,
      this.onOpenNotification
    );
  }

  onRegister(token) {
    console.log("[ Notification ] registered ", token);
  }

  onNotification(notify) {
    console.log("[ Notification ] onNotification ", notify);
  }

  onOpenNotification(notify) {
    console.log("[ Notification ] onNotification ", notify);
    alert("Open Notification");
  }

  onPressSendNotification = () => {
    this.localNotify.showNotification(
      1,
      "App Notification",
      "Local Notification",
      {},
      {}
    );
  };

  render() {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => this.onPressSendNotification()}
      >
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
