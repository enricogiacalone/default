import React, { Component } from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcon";

export default class MenuButton extends Component {
  render() {
    const { onPress, source, iconSource, title } = this.props;
    const { btnIcon, btnText } = styles;
    return (
      <TouchableHighlight
        onPress={onPress}
        style={styles.btnClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.btnContainer}>
          {source && <Image source={source} style={btnIcon} />}

          {iconSource && (
            <CustomIcon name={iconSource} size={30} color="#bf1313" />
          )}

          <Text style={btnText}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
