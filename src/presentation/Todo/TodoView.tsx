import { Repository } from "@domain/Todo/Repository/Repository";
import { useTodoModelController } from "./hook/useTodoModelController";
import { TodosMain } from "./TodosMain";
import { TodoSelection } from "./TodoSelection";

interface TodoViewProps {
  repository: Repository;
}

export const TodoView = (props: TodoViewProps) => {
  const { repository } = props;
  const { mainTodo, fruitTodo, vegetableTodo, selectTodo, unSelectTodo } =
    useTodoModelController(repository);

  return (
    <div className="flex justify-between gap-2 mx-2 my-2">
      <TodosMain todos={mainTodo} selectTodo={selectTodo} />
      <TodoSelection type="Fruit" todos={fruitTodo} selectTodo={unSelectTodo} />
      <TodoSelection
        type="Vegetable"
        todos={vegetableTodo}
        selectTodo={unSelectTodo}
      />
    </div>
  );
};
