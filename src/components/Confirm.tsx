import React from "react";
import { Modal, Button } from "react-bootstrap";
type Props = {};

interface ConfirmModalProps {
    show: boolean;
    handleClose: () => void; 
    handleConfirm: () => void;
    title: string;
    body: string; 
  }

const Confirm:React.FC<ConfirmModalProps> = ({ show, handleClose, handleConfirm, title, body }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button type="submit" variant="danger" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Confirm;
