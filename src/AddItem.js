import { useState } from "react";

function AddItem(props) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addItem(title, description);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="title"
            name="title"
            className="title-input"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Todo Item"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => props.setIsAddItemOpen(false)}
          >
            CANCEL
          </button>
          <button type="submit" className="add-btn">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
