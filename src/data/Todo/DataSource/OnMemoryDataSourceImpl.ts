import { ITodos, ITodo, TypeTodo } from "@domain/Todo/Model/TodoModel";
import type { DataSource } from "./DataSource";
import { v4 as uuidv4 } from "uuid";

export class OnMemoryDataSourceImpl implements DataSource {
  todoMain: ITodos = {};
  todoFruit: ITodos = {};
  todoVegetable: ITodos = {};

  constructor() {
    const array = [
      {
        type: "Fruit",
        name: "Apple",
      },
      {
        type: "Vegetable",
        name: "Broccoli",
      },
      {
        type: "Vegetable",
        name: "Mushroom",
      },
      {
        type: "Fruit",
        name: "Banana",
      },
      {
        type: "Vegetable",
        name: "Tomato",
      },
      {
        type: "Fruit",
        name: "Orange",
      },
      {
        type: "Fruit",
        name: "Mango",
      },
      {
        type: "Fruit",
        name: "Pineapple",
      },
      {
        type: "Vegetable",
        name: "Cucumber",
      },
      {
        type: "Fruit",
        name: "Watermelon",
      },
      {
        type: "Vegetable",
        name: "Carrot",
      },
    ];

    const todos: ITodos = {};

    array.forEach((item) => {
      const id = uuidv4();
      todos[id] = {
        id: id,
        type: item.type as ITodo["type"],
        name: item.name,
      };
    });

    this.todoMain = todos;
  }

  getTodos = (type: TypeTodo) => {
    if (type === "Main") return this.todoMain;
    else if (type === "Fruit") return this.todoFruit;
    else return this.todoVegetable;
  };

  setTodo = (type: TypeTodo, todos: ITodos) => {
    if (type === "Main") this.todoMain = todos;
    else if (type === "Fruit") this.todoFruit = todos;
    else this.todoVegetable = todos;
  };

  addTodo = (type: TypeTodo, todo: ITodo) => {
    if (type === "Main") this.todoMain[todo.id] = todo;
    else if (type === "Fruit") this.todoFruit[todo.id] = todo;
    else this.todoVegetable[todo.id] = todo;
  };

  deleteTodo = (type: TypeTodo, id: ITodo["id"]) => {
    if (type === "Main") delete this.todoMain[id];
    else if (type === "Fruit") delete this.todoFruit[id];
    else delete this.todoVegetable[id];
  };
}
