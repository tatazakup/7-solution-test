import { useEffect, useState } from "react";
import { Repository } from "@domain/Todo/Repository/Repository";
import { ITodo, ITodos } from "@domain/Todo/Model/TodoModel";
import {
  AutoDeleteTodoUseCase,
  SelectTodoUseCase,
  UnSelectTodoUseCase,
} from "@domain/Todo/UseCase";

export type ISelectTodo = (todo: ITodo) => Promise<string>;
export type IUnSelectTodo = (todo: ITodo) => Promise<string>;
export type IAutoDeleteTodo = (todo: ITodo) => Promise<string>;

export const useTodoModelController = (repository: Repository) => {
  const [mainTodo, setMainTodo] = useState<ITodos>({});
  const [fruitTodo, setFruitTodo] = useState<ITodos>({});
  const [vegetableTodo, setVegetableTodo] = useState<ITodos>({});

  useEffect(() => {
    async function init() {
      const initialTodos = await repository.getTodos("Main");
      setMainTodo(initialTodos);
    }
    void init();
  }, [repository]);

  const selectTodo: ISelectTodo = async (todo) => {
    await SelectTodoUseCase(repository, todo);
    const todos = await Promise.all([
      repository.getTodos("Main"),
      repository.getTodos("Fruit"),
      repository.getTodos("Vegetable"),
    ]);
    setMainTodo({ ...todos[0] });
    setFruitTodo({ ...todos[1] });
    setVegetableTodo({ ...todos[2] });
    return "success";
  };

  const unSelectTodo: IUnSelectTodo = async (todo) => {
    await UnSelectTodoUseCase(repository, todo);
    const todos = await Promise.all([
      repository.getTodos("Main"),
      repository.getTodos("Fruit"),
      repository.getTodos("Vegetable"),
    ]);
    setMainTodo({ ...todos[0] });
    setFruitTodo({ ...todos[1] });
    setVegetableTodo({ ...todos[2] });
    return "success";
  };

  useEffect(() => {
    AutoDeleteTodoUseCase(
      repository,
      setMainTodo,
      setFruitTodo,
      setVegetableTodo
    );
  }, [AutoDeleteTodoUseCase]);

  return {
    mainTodo,
    fruitTodo,
    vegetableTodo,
    selectTodo,
    unSelectTodo,
  };
};
