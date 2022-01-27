import React from "react";
import Button from "./Button";
import "../styles/DeleteModal.css";
import PropTypes from "prop-types";

class DeleteModal extends React.Component {
  render() {
    const { children, isDelete, closeDel, delById } = this.props;

    if (isDelete) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>{children}</h3>
            <div className="btn-group">
              <Button text="Yes" variant="primary" action={delById} />
              <Button text="Cancel" variant="warning" action={closeDel} />
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
