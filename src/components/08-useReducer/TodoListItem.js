import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ index, todo, handleToggle, handleDelete }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done ? "complete" : ""}`}
      >{`${index + 1}. ${todo.desc}`}</p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
