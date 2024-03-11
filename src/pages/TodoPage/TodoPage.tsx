import { TodoView } from "@presentation/Todo/TodoView";
import { OnMemoryDataSourceImpl } from "@data/Todo/DataSource/OnMemoryDataSourceImpl";
import { RepositoryImpl } from "@data/Todo/Repository/RepositoryImpl";

export const TodoPage = () => {
  const dataSource = new OnMemoryDataSourceImpl();
  const repository = new RepositoryImpl(dataSource);

  return <TodoView repository={repository} />;
};
