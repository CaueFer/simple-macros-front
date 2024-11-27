import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import HorizontalCalendar from "../components/home/horizontalCalendar";
import CalcLeftChart from "../components/home/calcLeftChart";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HorizontalCalendar />

      <CalcLeftChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FF0000"
  },
});

export default HomeScreen;
