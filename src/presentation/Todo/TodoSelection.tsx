import { ITodos, TypeTodo } from "@domain/Todo/Model/TodoModel";
import { IUnSelectTodo } from "./hook/useTodoModelController";

export type ITodoSelection = {
  type: TypeTodo;
  todos: ITodos;
  selectTodo: IUnSelectTodo;
};

export const TodoSelection = (props: ITodoSelection) => {
  const { type, todos, selectTodo } = props;
  return (
    <div className="w-full">
      <h6 className="text-center">{type}</h6>
      <div>
        {Object.values(todos).map((todo) => (
          <div
            key={todo.id}
            className="rounded-lg border-2 py-1 cursor-pointer"
            onClick={() => selectTodo(todo)}
          >
            <p className="text-sm text-center">{todo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
