import { ITodo, TypeTodo } from "../Model/TodoModel";
import { Repository } from "../Repository/Repository";

export const SelectTodoUseCase = async (
  repository: Repository,
  todo: ITodo
) => {
  const selectAt = new Date();
  selectAt.setSeconds(selectAt.getSeconds() + 5);
  const newTodo: ITodo = { ...todo };
  newTodo.timestamp = selectAt;

  void Promise.all([
    repository.deleteTodo("Main", todo.id),
    repository.addTodo(todo.type, newTodo),
  ]);
};
