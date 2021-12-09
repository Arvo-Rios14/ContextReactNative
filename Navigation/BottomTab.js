import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Componentes/Home";
import WishList from "../Componentes/WishList";
import Cart from "../Componentes/Cart";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Libreria",
          tabBarIcon: () => (
            <Ionicons name={"ios-home"} size={24} color="#0a84ff" />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        options={{
          headerShown: false,
          tabBarLabel: "WishList",
          tabBarIcon: () => (
            <Ionicons name={"flash"} size={24} color="#0a84ff" />
          ),
        }}
        component={WishList}
      />
        <Tab.Screen
          name="Cart"
          options={{
            headerShown: false,
            tabBarLabel: "Cart",
            tabBarIcon: () => (
              <Ionicons name={"flash"} size={24} color="#0a84ff" />
            ),
          }}
          component={Cart}
        />
    </Tab.Navigator>
  );
}
