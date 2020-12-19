import {
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from "../types";
import HomeScreen from "./../screens/HomeScreen/index";
import SearchScreen from "./../screens/SearchScreen/index";
import LibraryScreen from "./../screens/LibraryScreen/index";
import PremiumScreen from "./../screens/PremiumScreen/index";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="search" color={color} size={40} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-library" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="spotify" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: "Search" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: "Library" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: "Premium" }}
      />
    </TabFourStack.Navigator>
  );
}
