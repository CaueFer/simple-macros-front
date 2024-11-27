import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Topbar from "../components/ui/topbar";
import HorizontalCalendar from "../components/home/horizontalCalendar";

function Daily() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Daily;
