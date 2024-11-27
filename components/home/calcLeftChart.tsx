import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

const CalcLeftChart = () => {
  // VALORES EM PORCENTAGEM
  const calories = 75; // Percentual para calorias
  const fats = 30; // Percentual para gorduras
  const proteins = 30; // Percentual para proteínas
  const carbs = 50; // Percentual para carboidratos

  return (
    <View style={styles.container}>
      <View style={styles.caloriesBarContainer}>
        <Text style={styles.calcTitle}>Calorias restantes</Text>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesValue}>1,099</Text>
          <Text style={styles.unit}>cal</Text>
        </View>

        {/* Barra de calorias */}
        <View style={tw``}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${calories}%`, backgroundColor: "#FFA500" },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={tw`rounded-lg border border-gray-400 h-auto`}>
        {/* Barra de gorduras */}
        <View style={tw`p-3 mb-2 relative`}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${fats}%`, backgroundColor: "#FFD700" },
              ]}
            />
          </View>
          <Text
            style={tw`text-[14px] font-medium p-3 mb-2 absolute top-0 left-0 text-black`}
          >
            Gorduras
          </Text>
        </View>

        {/* Barra de proteínas */}
        <View style={tw`mb-2`}>
          <Text style={tw`text-[14px] font-medium p-3 mb-2 `}>Proteínas</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${proteins}%`, backgroundColor: "#FF4500" },
              ]}
            />
          </View>
        </View>

        {/* Barra de carboidratos */}
        <View style={tw`mb-2`}>
          <Text style={tw`text-[14px] font-medium p-3 mb-2`}>Carboidratos</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${carbs}%`, backgroundColor: "#1E90FF" },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
  },
  calcTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  caloriesBarContainer: {
    flexDirection: "column",
    gap: 0,
    marginBottom: 65,
  },
  caloriesContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 10,
  },
  caloriesValue: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#333",
  },
  unit: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 5,
  },
  progressBarBackground: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
  },
});

export default CalcLeftChart;
