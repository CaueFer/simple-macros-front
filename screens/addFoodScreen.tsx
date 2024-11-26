import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { setupDatabase, insertFood, getFoods } from "../data/db";

export default function AddFoodScreen() {
  const [name, setName] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [icon, setIcon] = useState("");
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    const initialize = async () => {
      await setupDatabase();
      fetchFoods();
    };
    initialize();
  }, []);

  const fetchFoods = async () => {
    const data = await getFoods();
    setFoods(data);
  };

  const addFood = async () => {
    const proteinNum = parseFloat(protein);
    const carbsNum = parseFloat(carbs);
    const fatsNum = parseFloat(fats);
    const calories = proteinNum * 4 + carbsNum * 4 + fatsNum * 9;

    await insertFood(name, proteinNum, carbsNum, fatsNum, calories, icon);
    setName("");
    setProtein("");
    setCarbs("");
    setFats("");
    setIcon("");
    fetchFoods();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Comida</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Proteínas (g)"
        value={protein}
        onChangeText={setProtein}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Carboidratos (g)"
        value={carbs}
        onChangeText={setCarbs}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gorduras (g)"
        value={fats}
        onChangeText={setFats}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ícone (nome ou caminho)"
        value={icon}
        onChangeText={setIcon}
      />
      <Button title="Adicionar" onPress={addFood} />

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.foodItem}>
            {item.name} - {item.calories} kcal
          </Text>
        )}
      />
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
  foodItem: {
    fontSize: 18,
    marginTop: 10,
  },
});
