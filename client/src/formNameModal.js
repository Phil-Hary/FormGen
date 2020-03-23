import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IndividualResponse from './IndividualResponse';

/*
DESCRIPTION

component: FormNameModal

Desc:
	This modal is used to get the formName and description

*/

const FormNameModal = (props) => {
	

  return (
	<div>
    <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg" contentClassName="modal-custom-style">
		<ModalHeader toggle={props.toggle}>FormGen</ModalHeader>
		<ModalBody>
			<form>
			  <div className="form-group">
				<label for="formName">Form Name</label>
				<input type="text" className="form-control" id="formName" ariaDescribedby="formName" placeholder="Enter form name" onChange={props.setFormName}/>
				<small id="nameHelp" className="form-text text-muted">Enter a unique form name</small>
			  </div>
			  <div className="form-group">
				<label for="desc">Description</label>
				<input type="text" className="form-control" id="desc" placeholder="Enter description" onChange={props.setDesc}/>
			  </div>
			</form>
		</ModalBody>
		<ModalFooter>
		  <Button color="primary" onClick={props.submitCreate}>Proceed</Button>{' '}
		  <Button color="secondary" onClick={props.cancelCreate}>Cancel</Button>
		</ModalFooter>
	  </Modal>
	</div>
  );
}

export default FormNameModal;