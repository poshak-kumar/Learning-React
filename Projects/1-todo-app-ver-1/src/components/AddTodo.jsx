function AddTodo() {
  return (
    <div class="container items-container">
      <div class="row item-rows">
        <div class="col-6">
          <input type="text" placeholder="Enter Tode Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success item-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
