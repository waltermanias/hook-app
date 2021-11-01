import React, { useRef } from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const { formValues, handleInputChange, reset } = useForm({ description: "" });

  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.description.trim() === "") {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: formValues.description,
      done: false,
    };

    handleAddTodo(newTodo);

    reset();
    input.current.select();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          type="text"
          name="description"
          placeholder="Aprender"
          autoComplete="off"
          className="form-control"
          onChange={handleInputChange}
          value={formValues.description}
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
