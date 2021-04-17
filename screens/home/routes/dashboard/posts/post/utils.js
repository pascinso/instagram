import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useProfileImage as ProfileImage } from "tools/profile/image";
import { Entypo } from "@expo/vector-icons";
import { useFooter as Footer } from "./footer";

const { get: getDimension } = Dimensions;
const styles = StyleSheet.create({
  postStyles: {
    height: getDimension("window").width,
  },
  profileImageStyles: {
    height: 40,
    width: 40,
  },
  headerStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 3,
    paddingRight: 15,
  },
  nameStyles: {
    fontWeight: "bold",
    color: "#3c3c3c",
  },
  postImageStyles: {
    flex: 1,
  },
  profileStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const {
  postStyles,
  profileImageStyles,
  postImageStyles,
  headerStyles,
  nameStyles,
  profileStyles,
} = styles;

export { React, Entypo, View, Text, Image, Footer, ProfileImage };
