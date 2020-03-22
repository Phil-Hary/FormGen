import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IndividualResponse from './IndividualResponse';

const ViewResponse = (props) => {
	
	console.log(props.formDetails);

  return (
	<div>
    <Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg" contentClassName="modal-custom-style">
		<ModalHeader toggle={props.toggle}>{props.currentForm}</ModalHeader>
		<ModalBody>
		{
			props.formDetails.map((form)=>{
			console.log(form.formName);
			if(form.formName === props.currentForm){
				console.log(form.responses);
				return(
					<IndividualResponse responseData = {form.responses} currentForm={props.currentForm}/>
				);
			}
			})
		}
		</ModalBody>
		<ModalFooter>
		  <Button color="primary" onClick={props.toggle}>Close</Button>{' '}
		</ModalFooter>
	  </Modal>
	</div>
  );
}

export default ViewResponse;