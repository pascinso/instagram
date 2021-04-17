import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useLogo } from "tools/logo";
import { useDashboard } from "./routes";
import { useLeft, useRight } from "./header";

export const { Screen, Navigator } = createStackNavigator();
export const options = {
  title: "",
  headerTitle: useLogo,
  headerLeft: useLeft,
  headerRight: useRight,
};

export { React, useDashboard };
