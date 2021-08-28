import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import SplashPage from "../screens/Splash"
import HomePage from "../screens/Home"


const stack = createStackNavigator();
export default () => {
  return (
    <stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <stack.Screen name="Splash" component={SplashPage} />
      <stack.Screen name="Home" component={HomePage}/>
    </stack.Navigator>
  );
};
