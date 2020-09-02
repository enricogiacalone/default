import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import CustomIcon from "../Icons/CustomIcon";

export default class MenuImage extends Component {
  render() {
    const { onPress } = this.props;
    const { headerButtonContainer } = styles;

    return (
      <TouchableOpacity style={headerButtonContainer} onPress={onPress}>
        {/* <Image
          style={styles.headerButtonImage}
          source={require("../../../assets/icons/menu.png")}
        /> */}
        <CustomIcon name={"hamburger-menu"} size={28} color="#bf1313" />
      </TouchableOpacity>
    );
  }
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
};
