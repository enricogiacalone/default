import React, { Component } from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomIcon from "../Icons/CustomIcon";

export default class BackButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.btnContainer}
      >
        <View style={styles.btnContainer}>
          <CustomIcon name="arrow_left" size={30} color="#bf1313" />
        </View>
      </TouchableHighlight>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
