import FormInput from "../components/FormInput";
import TodoItem from "../components/TodoItem";
import Logo from "../logo.svg";
import "../App.css";
import React from "react";
import EditModal from "../components/EditModal";

class Task extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading a book",
      },
      {
        id: 2,
        title: "Workout training",
      },
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
    },
    isDelete: false,
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  deleteTask = (id) => {
    const del = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: del,
      isDelete: false,
    });
  };

  addTask = (data) => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    if (data !== "") {
      this.setState({
        todos: [...this.state.todos, newData],
      });
    } else {
      return this.setState({
        todos: [...this.state.todos],
      });
    }
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h3>Task App</h3>
        </div>
        <h1>Hello World!</h1>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            add={this.addTask}
            open={this.openModal}
            del={this.deleteTask}
          />
        ))}

        <FormInput add={this.addTask} />

        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
      </div>
    );
  }
}

export default Task;
