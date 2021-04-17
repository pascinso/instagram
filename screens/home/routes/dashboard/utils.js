import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { usePosts as Posts } from "./posts";
import { useStories as Stories } from "./stories";

const styles = StyleSheet.create({
  homeStyles: {
    flex: 1,
    backgroundColor: "white",
  },
});

export const { homeStyles } = styles;

export { React, SafeAreaView, Stories, Posts };
