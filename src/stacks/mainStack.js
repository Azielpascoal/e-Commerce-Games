import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import SplashPage from "../screens/Splash"
import MainTab from "./mainTab";


const stack = createStackNavigator();
export default () => {
  return (
    <stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Splash" component={SplashPage} />
      <stack.Screen name="MainTab" component={MainTab}/>
    </stack.Navigator>
  );
};
