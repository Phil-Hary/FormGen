import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

class EditNameModal extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			nameArray:[],
			currentForm:""
		}
	}
	
	getFormNames(){
		axios
		.get('/admin/getFormNames')
		.then((data)=>{
			console.log(data);
			this.setState({
				nameArray:data.data,
				modal:true
			})
		})
		.catch((data)=>{
			console.log("Error");
		})
	}

	
	componentDidMount(){
		this.getFormNames();
	}
	
	render(){
		
		return (
			(this.state.nameArray != [])?(
			<div>
				<Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-lg" contentClassName="modal-custom-style">
					<ModalHeader toggle={this.props.toggle}>FormGen</ModalHeader>
					<ModalBody>
						<p>Select a form</p>
						<form>
						<select id="formName" onClick={this.props.setFormName}>
							<option value="" disabled selected hidden>Select a component</option>
							{
								this.state.nameArray.map((name)=>{
									console.log(name);
									return(
										<option value={name}>{name}</option>
									);
									  
									
								})
							}
						</select>
						</form>
					</ModalBody>
					<ModalFooter>
					  <Button color="primary" onClick={this.props.submitCreate}>Proceed</Button>{' '}
					  <Button color="secondary" onClick={this.props.cancelCreate}>Cancel</Button>
					</ModalFooter>
				  </Modal>
			</div>
		):(false)
		);
	}

  
}

export default EditNameModal;