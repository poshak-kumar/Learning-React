function AddTodo() {
  return (
    <div className="container items-container">
      <div className="row item-rows">
        <div className="col-6">
          <input type="text" placeholder="Enter Tode Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success item-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
