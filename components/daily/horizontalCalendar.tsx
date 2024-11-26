import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";

const HorizontalCalendar = () => {
  const today = moment().locale("pt-br");
  const days = [];

  for (let i = -3; i <= 3; i++) {
    days.push(today.clone().add(i, "days"));
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {days.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              day.isSame(today, "day") && styles.todayContainer,
            ]}
          >
            <Text
              style={[
                styles.dayName,
                day.isSame(today, "day") && styles.todayText,
              ]}
            >
              {day.format("ddd").toUpperCase()}
            </Text>
            <Text
              style={[
                styles.dayNumber,
                day.isSame(today, "day") && styles.todayText,
              ]}
            >
              {day.format("D")}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
  },
  dayContainer: {
    width: 60, // Largura de cada dia
    height: 100, // Altura de cada dia
    marginHorizontal: 5, // Espaçamento entre os dias
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  todayContainer: {
    backgroundColor: "#FFD700", // Cor de destaque para o dia atual
  },
  dayName: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  dayNumber: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
  },
  todayText: {
    color: "#fff",
  },
});

export default HorizontalCalendar;
