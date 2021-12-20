import React from "react";
import Button from "./Button";
import "../styles/DeleteModal.css";
import PropTypes from "prop-types";

class DeleteModal extends React.Component {
  render() {
    const { hapus, close, del } = this.props;
    const delById = (id) => {
      del(id);
    };
    if (hapus) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Are you sure?</h3>
            <div className="btn-group">
              <Button
                text="Yes"
                variant="primary"
                action={() => delById(todo.id)}
              />
              <Button text="Cancel" variant="warning" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

DeleteModal.propTypes = {
  del: PropTypes.func,
};

export default DeleteModal;
