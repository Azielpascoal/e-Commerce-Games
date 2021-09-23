import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import SplashPage from "../screens/Splash"
import LoginPage from "../screens/Login"
import SignUpPage from "../screens/SignUp"
import MainTab from "./mainTab";


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
      <stack.Screen name="Login" component={LoginPage}/>
      <stack.Screen name="SignUp" component={SignUpPage}/>
      <stack.Screen name="MainTab" component={MainTab}/>
    </stack.Navigator>
  );
};
