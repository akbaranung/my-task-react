import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import DeleteModal from "../components/DeleteModal";
const TodoItem = ({ del, todo, open }) => {
  const [isDelete, setDelete] = useState(false);
  const openDel = () => {
    setDelete(true);
  };
  const closeDel = () => {
    setDelete(false);
  };
  const delById = (id) => {
    del(id);
  };
  return (
    <>
      <div style={todoItem}>
        <p>{todo.title}</p>
        <div>
          <Button
            text="Edit"
            variant="success"
            action={() => open(todo.id, todo.title)}
          />
          <Button text="Delete" variant="warning" action={openDel} />
        </div>
      </div>
      <DeleteModal
        isDelete={isDelete}
        closeDel={closeDel}
        delById={() => delById(todo.id)}
      >
        <p>
          Are You sure delete <b>{todo.title}</b>?{" "}
        </p>
      </DeleteModal>
    </>
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
