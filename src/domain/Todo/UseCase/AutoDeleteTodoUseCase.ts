import { delay } from "@utils/Delay";
import { Repository } from "../Repository/Repository";
import { UnSelectTodoUseCase } from "./UnSelectTodoUseCase";
import { Dispatch } from "react";
import { ITodos } from "../Model/TodoModel";

export const AutoDeleteTodoUseCase = async (
  repository: Repository,
  setMainTodo: Dispatch<React.SetStateAction<ITodos>>,
  setFruitTodo: Dispatch<React.SetStateAction<ITodos>>,
  setVegetableTodo: Dispatch<React.SetStateAction<ITodos>>
) => {
  while (true) {
    await delay(100);
    const fruitTodo = await repository.getTodos("Fruit");
    const vegetableTodo = await repository.getTodos("Vegetable");
    const currentTime = new Date();

    const mergeTodos = { ...fruitTodo, ...vegetableTodo };
    Object.values(mergeTodos).forEach(async (todo) => {
      if (todo.timestamp) {
        if (currentTime > todo.timestamp) {
          await UnSelectTodoUseCase(repository, todo);
          const todos = await Promise.all([
            repository.getTodos("Main"),
            repository.getTodos("Fruit"),
            repository.getTodos("Vegetable"),
          ]);
          setMainTodo({ ...todos[0] });
          setFruitTodo({ ...todos[1] });
          setVegetableTodo({ ...todos[2] });
        }
      }
    });
  }
};
