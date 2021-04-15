import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  containerStyles: {
    height: 70,
    width: 70,
    borderRadius: 40,
    borderWidth: 1.5,
    margin: 10,
    padding: 4,
    borderColor: "#ae22e0",
  },
  imageStyles: {
    flex: 1,
    borderRadius: 40,
  },
});
export const { imageStyles, containerStyles } = styles;

export { React, Image, View };
