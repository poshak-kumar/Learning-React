import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todaDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row item-rows">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todaDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger item-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
