import React from "react";
import { View, Text, YellowBox } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./Screen/Login.js";
import Dashboard from "./Screen/Dashboard.js";
import Loading from "./Screen/Loading.js";
import Feed from "./Tab/Feed";

import { db } from "./Config.js";

console.ignoredYellowBox = ["Setting a timer"];

class LoginScreen extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard,
  Feed: Feed
});

export default createAppContainer(AppSwitchNavigator);
const AppNavigator = createAppContainer(AppSwitchNavigator);
