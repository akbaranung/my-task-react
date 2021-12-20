import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const TodoItem = ({ todo, open, openDelMod }) => {
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button
          text="Edit"
          variant="success"
          action={() => open(todo.id, todo.title)}
        />
        <Button text="Delete" variant="warning" action={openDelMod} />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;

const todoItem = {
  background: "#2da4f8",
  color: "white",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
