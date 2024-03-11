import { ITodos } from "@domain/Todo/Model/TodoModel";
import { ISelectTodo } from "./hook/useTodoModelController";

type ITodosMain = {
  todos: ITodos;
  selectTodo: ISelectTodo;
};
export const TodosMain = (props: ITodosMain) => {
  const { todos, selectTodo } = props;
  return (
    <div className="flex flex-col w-full gap-2">
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
  );
};
