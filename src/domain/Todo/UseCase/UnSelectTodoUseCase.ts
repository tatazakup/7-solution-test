import { ITodo } from "../Model/TodoModel";
import { Repository } from "../Repository/Repository";

export const UnSelectTodoUseCase = async (
  repository: Repository,
  todo: ITodo
) => {
  const newTodo: ITodo = { ...todo };
  delete newTodo.timestamp;

  void Promise.all([
    repository.deleteTodo(todo.type, todo.id),
    repository.addTodo("Main", newTodo),
  ]);
};
