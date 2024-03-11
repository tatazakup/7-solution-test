import { ITodo, ITodos, TypeTodo } from "../Model/TodoModel";

export interface Repository {
  getTodos: (type: TypeTodo) => Promise<ITodos>;
  updateTodos: (type: TypeTodo, todos: ITodos) => Promise<void>;
  addTodo: (type: TypeTodo, todo: ITodo) => Promise<void>;
  deleteTodo: (type: TypeTodo, id: ITodo["id"]) => Promise<void>;
}
