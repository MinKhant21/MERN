import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; // assuming you're using Expo for your project
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Cart') {
      iconName = focused ? 'cart' : 'cart-outline';
    } else if (route.name === 'Order') {
      iconName = focused ? 'list' : 'list-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarBadge: route.name === 'Cart' ? 5 : null, // Adjust the badge value as needed
  tabBarShowLabel: false,
  headerShown: false,
});

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
