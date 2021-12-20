import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import Logo from "./logo.svg";
import "./App.css";
import React from "react";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

class App extends React.Component {
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

  openDel = (id) => {
    this.setState({
      isDelete: true,
      deleteData: {
        id,
      },
    });
  };

  closeDel = () => {
    this.setState({
      isDelete: false,
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
    this.setState({
      todos: [...this.state.todos, newData],
    });
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
            openDelMod={this.openDel}
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

        <DeleteModal
          hapus={this.state.isDelete}
          close={this.closeDel}
          del={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
