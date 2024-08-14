function TodoItem({ todoName, todaDate }) {
  return (
    <div className="container">
      <div className="row item-rows">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todaDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger item-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
