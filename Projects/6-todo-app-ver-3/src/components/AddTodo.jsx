import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container items-container">
      <div className="row item-rows">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Tode Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
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
