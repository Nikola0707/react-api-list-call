import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalShow(props) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);  
    return (
      <>  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default ModalShow