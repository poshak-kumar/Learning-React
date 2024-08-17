import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  /** Appling useRef on this Todo App */
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container items-container">
      <div className="row item-rows">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Tode Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success item-button"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircleOutline></IoMdAddCircleOutline>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
