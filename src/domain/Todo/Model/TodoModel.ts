export type TypeTodo = "Main" | "Fruit" | "Vegetable";

export type ITodo = {
  id: string;
  type: "Fruit" | "Vegetable";
  name: string;
  timestamp?: Date;
};

export type ITodos = {
  [key: ITodo["id"]]: ITodo;
};
