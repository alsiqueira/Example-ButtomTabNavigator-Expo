import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Explorer from "./pages/Explorer";
import Library from "./pages/Library";
import Subscription from "./pages/Subscription";

import ButtonAdd from "./components/ButtonAdd";

const ButtomTabNavigator = createBottomTabNavigator();

export default function Router() {
  return (
    <ButtomTabNavigator.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#312E38",
          borderTopColor: "transparent",
        },
        activeTintColor: "#fff",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <ButtomTabNavigator.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <ButtomTabNavigator.Screen
        name="Explorar"
        component={Explorer}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      <ButtomTabNavigator.Screen
        name="Adcionar"
        component={Add}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonAdd size={size} color={color} focused={focused} />
          ),
        }}
      />

      <ButtomTabNavigator.Screen
        name="Inscrições"
        component={Subscription}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="youtube" size={size} color={color} />
          ),
        }}
      />

      <ButtomTabNavigator.Screen
        name="Biblioteca"
        component={Library}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />
    </ButtomTabNavigator.Navigator>
  );
}
