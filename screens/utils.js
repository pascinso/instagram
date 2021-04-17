import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { useHome } from "./home";
import { useNotifications } from "./notifications";
import { useDiscovery } from "./discovery";
import { usePost } from "./post";
import { useProfile } from "./profile";

export const { Navigator, Screen } = createBottomTabNavigator();
export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#000",
  inactiveColor: "gray",
  style: { padding: 10 },
};

export function screenOptions({ route: { name } }) {
  let Icon;
  const size = 25;

  if (name === "home") {
    Icon = <Foundation name="home" size={size} />;
  } else if (name === "discovery") {
    Icon = <Feather name="search" size={size} />;
  } else if (name === "post") {
    Icon = <Feather name="plus-square" size={size} />;
  } else if (name === "notifications") {
    Icon = <AntDesign name="hearto" size={size} />;
  } else if (name === "profile") {
    Icon = <Ionicons name="person-outline" size={size} />;
  }

  return {
    tabBarIcon() {
      return Icon;
    },
  };
}

export { React, useHome, useNotifications, useDiscovery, usePost, useProfile };
