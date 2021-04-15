import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useStory as Story } from "./story";
import stories from "../profiles.json";

const styles = StyleSheet.create({
  storiesStyles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 15,
    marginLeft: 4,
  },
});

export const { storiesStyles } = styles;

export { stories, React, View, FlatList, Story };
