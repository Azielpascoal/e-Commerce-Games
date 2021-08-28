import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import SplashPage from "../screens/Splash"
import { StackActions } from "@react-navigation/native"

const stack = createStackNavigator();
export default () => {
  return (
    <stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Splash" component={SplashPage} />
    </stack.Navigator>
  );
};
