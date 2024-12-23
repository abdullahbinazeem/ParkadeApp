import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import { StatusBar } from "expo-status-bar";
import ParkadeList from "./App/Screen/List/ParkadeList";
import ParkadeMap from "./App/Screen/Map/ParkadeMap";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View className="flex-1 mt-12">
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "List View") {
                iconName = focused ? "list-circle" : "list-circle-outline";
              } else if (route.name === "Map View") {
                iconName = focused ? "map" : "map-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              boxSizing: "border-box",
              position: "absolute",
              height: 70,
              paddingHorizontal: 70,
            },
            tabBarItemStyle: {
              margin: 10,
            },
            tabBarActiveTintColor: "#649EFF",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="List View" component={ParkadeList} />
          <Tab.Screen name="Map View" component={ParkadeMap} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
