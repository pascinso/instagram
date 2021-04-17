import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useProfileImage as ProfileImage } from "tools/profile/image";

const styles = StyleSheet.create({
  storyStyles: { flex: 1 },
  nameStyles: {
    textAlign: "center",
  },
});

export const { storyStyles, nameStyles } = styles;

export { React, View, Text, ProfileImage };
