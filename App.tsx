import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddFoodScreen from "./screens/addFoodScreen";
import IconFeather from "react-native-vector-icons/Feather";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <IconFeather name="home" size={24} color="#000" />
            ),
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "Georgia",
              fontWeight: 300,
            },
          }}
        />
        <Tab.Screen
          name="Diário"
          component={AddFoodScreen}
          options={{
            tabBarIcon: () => (
              <IconFeather name="plus" size={37} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="Comidas"
          component={AddFoodScreen}
          options={{
            tabBarIcon: () => <IconMCI name="food" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
