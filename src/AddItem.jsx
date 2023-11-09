import React from "react";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        name="addItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        id="submitBtn"
        name="submitBtn"
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        +
      </button>
    </form>
  );
};

export default AddItem;
