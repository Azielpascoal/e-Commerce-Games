import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/Home";

const tab = createBottomTabNavigator();
export default () => {
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <tab.Screen name="Home" component={HomePage} />
    </tab.Navigator>
  );
};
