import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  const [protein, setProtein] = useState<string>("");
  const [carbs, setCarbs] = useState<string>("");
  const [fats, setFats] = useState<string>("");
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    const totalCalories =
      Number(protein) * 4 + Number(carbs) * 4 + Number(fats) * 9;
    setCalories(totalCalories);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Macro Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Proteínas (g)"
        keyboardType="numeric"
        value={protein}
        onChangeText={setProtein}
      />
      <TextInput
        style={styles.input}
        placeholder="Carboidratos (g)"
        keyboardType="numeric"
        value={carbs}
        onChangeText={setCarbs}
      />
      <TextInput
        style={styles.input}
        placeholder="Gorduras (g)"
        keyboardType="numeric"
        value={fats}
        onChangeText={setFats}
      />

      <Button title="Calcular Calorias" onPress={calculateCalories} />

      {calories !== null && (
        <Text style={styles.result}>Calorias Totais: {calories} kcal</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
