import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LinkGenModal = (props) => {
	
	const url = "http://localhost:3000/user/"+props.formName;
	
	console.log(props.formName);
	

  return (
	<div>
    <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg" contentClassName="modal-custom-style">
		<ModalHeader toggle={props.toggle}>{props.formName}</ModalHeader>
		<ModalBody>
		{
			url
		}
		</ModalBody>
		<ModalFooter>"
		  <Button color="primary" onClick={props.toggle}>Got it</Button>
		</ModalFooter>
	  </Modal>
	</div>
  );
}

export default LinkGenModal;