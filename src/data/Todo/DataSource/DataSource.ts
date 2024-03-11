import { ITodos, ITodo, TypeTodo } from "@domain/Todo/Model/TodoModel";

export interface DataSource {
  getTodos: (type: TypeTodo) => ITodos;
  setTodo: (type: TypeTodo, todos: ITodos) => void;
  addTodo: (type: TypeTodo, todo: ITodo) => void;
  deleteTodo: (type: TypeTodo, id: ITodo["id"]) => void;
}
