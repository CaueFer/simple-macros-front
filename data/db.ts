import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export const setupDatabase = async () => {
  db = await SQLite.openDatabaseAsync("foods.db");

  try {
    console.log('criando tabela')
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS foods (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        protein REAL NOT NULL,
        carbs REAL NOT NULL,
        fats REAL NOT NULL,
        calories REAL NOT NULL,
        icon TEXT NOT NULL
      );`
    );
  } catch (error) {
    console.error("Erro ao criar a tabela", error);
  }
};

export const insertFood = async (
  name: string,
  protein: number,
  carbs: number,
  fats: number,
  calories: number,
  icon: string
) => {
  try {
    await db.runAsync(
      `INSERT INTO foods (name, protein, carbs, fats, calories, icon) VALUES (?, ?, ?, ?, ?, ?);`,
      [name, protein, carbs, fats, calories, icon]
    );
  } catch (error) {
    console.error("Erro ao inserir comida", error);
  }
};

export const getFoods = async (): Promise<any[]> => {
  try {
    const results = await db.getAllAsync("SELECT * FROM foods");
    return results;
  } catch (error) {
    console.error("Erro ao buscar alimentos", error);
    return [];
  }
};
