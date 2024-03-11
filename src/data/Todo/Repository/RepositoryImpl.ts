import { Repository } from "@domain/Todo/Repository/Repository";
import { DataSource } from "../DataSource/DataSource";
import { TypeTodo, ITodos, ITodo } from "@domain/Todo/Model/TodoModel";

export class RepositoryImpl implements Repository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  getTodos = async (type: TypeTodo) => {
    return this.dataSource.getTodos(type);
  };

  updateTodos = async (type: TypeTodo, todos: ITodos) => {
    return this.dataSource.setTodo(type, todos);
  };

  addTodo = async (type: TypeTodo, todo: ITodo) => {
    return this.dataSource.addTodo(type, todo);
  };

  deleteTodo = async (type: TypeTodo, id: ITodo["id"]) => {
    return this.dataSource.deleteTodo(type, id);
  };
}
