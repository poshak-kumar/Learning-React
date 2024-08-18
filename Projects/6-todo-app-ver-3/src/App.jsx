import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // If you set the value on the basis of old value using Spread Operator, then don't pass the value directly, pass the Method
    // setTodoItems(newTodoItems);
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue, // Spread Operator
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItems = (todoItemName) => {
    // Filter is making one new array, not change the existing array
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItems}
      ></TodoItems>
    </center>
  );
}

export default App;
