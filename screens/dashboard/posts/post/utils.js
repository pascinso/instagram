import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useProfileImage as ProfileImage } from "tools/profile-image";

const { get: getDimension } = Dimensions;
const styles = StyleSheet.create({
  postStyles: {
    height: getDimension("window").width,
    marginBottom: 14,
  },
  profileImageStyles: {
    height: 40,
    width: 40,
  },
  headerStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameStyles: {
    fontWeight: "bold",
    color: "#3c3c3c",
  },
  postImageStyles: {
    flex: 1,
  },
  footerStyles: {
    paddingLeft: 8,
  },
  likesStyles: {
    fontWeight: "bold",
    marginTop: 3,
  },
  captionStyles: { marginTop: 3 },
  timeStyles: {
    color: "#8c8c8c",
    marginTop: 3,
  },
});

export const {
  postStyles,
  profileImageStyles,
  postImageStyles,
  headerStyles,
  footerStyles,
  nameStyles,
  likesStyles,
  captionStyles,
  timeStyles,
} = styles;

export { React, View, Text, Image, ProfileImage };
