import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todaDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
      ;
    </div>
  );
};

export default TodoItems;
