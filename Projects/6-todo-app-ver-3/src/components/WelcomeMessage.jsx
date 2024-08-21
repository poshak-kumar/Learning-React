import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return todoItems.length === 0 && <p>Enjoy Your Day!</p>;
};

export default WelcomeMessage;
