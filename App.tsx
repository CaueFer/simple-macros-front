import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddFoodScreen from "./screens/addFoodScreen";
import IconFeather from "react-native-vector-icons/Feather";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import { PaperProvider } from "react-native-paper";
import Daily from "./screens/daily";
import Topbar from "./components/ui/topbar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              paddingVertical: 10,
              paddingHorizontal: 15,
              height: 70,
              alignItems: "center",
              alignContent: "center",
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: "Roboto",
              fontWeight: "300",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <IconFeather name="home" size={26} color="#000" />
              ),
            }}
          />
          <Tab.Screen
            name="Diário"
            component={Daily}
            options={{
              header: ({ navigation }) => <Topbar navigation={navigation} title="Diário" />,
              tabBarIcon: () => (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: "#FFD700",
                      position: "absolute",
                    }}
                  />
                  <IconFeather name="plus" size={26} color="#000" />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Comidas"
            component={AddFoodScreen}
            options={{
              tabBarIcon: () => (
                <IconMCI name="food-outline" size={26} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
