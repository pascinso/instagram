import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Fontisto, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  footerStyles: {
    padding: 10,
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
  footerIconsStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    alignItems: "center",
  },
  footerIconsLeftStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
});

export const {
  footerStyles,
  footerIconsStyles,
  footerIconsLeftStyles,
  likesStyles,
  captionStyles,
  timeStyles,
} = styles;

export function useStore() {
  const [isLiked, like] = useState(false);
  const [likesCount, countLikes] = useState(0);

  return {
    isLiked,
    likesCount,
    like,
    countLikes,
  };
}

export { React, AntDesign, Fontisto, FontAwesome, Ionicons, View, Text };
