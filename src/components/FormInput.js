import React from "react";
import Button from "./Button";
import "../styles/FormInput.css";
class FormInput extends React.Component {
  state = {
    text: "",
  };
  change = (e) => {
    this.setState({ text: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    if (this.setState.text !== "") {
      this.props.add(this.state.text);
    }
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <form style={inputForm} onSubmit={this.submit}>
        <input
          type="text"
          onChange={this.change}
          style={input}
          placeholder="add task"
          value={this.state.text}
        />
        <Button text="Add" variant="primary" action={this.submit} />
      </form>
    );
  }
}

export default FormInput;

const inputForm = {
  background: "white",
  color: "white",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};

const input = {
  width: "70%",
  border: "none",
};
