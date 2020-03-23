import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditNameModal from './editNameModal';
import FormBuilder from './formBuilder';
import axios from 'axios';

/*
DESCRIPTION

component: EditForm

Desc:
	This component is called to edit a form.
	Based on the formName calls editNameModal or FormBuilder

*/

class EditForm extends React.Component{
	
	constructor(){
		super();
		this.state = {
			modal:true,
			formName:null,
			desc:null,
			nameArray:[]
		}
	}
	
	shouldComponentUpdate(){
		if(this.state.modal==true)
			return false;
		return true;
	}
	
	//Sets Form name
	setFormName = (e) => {
		console.log(e.target.value);
		this.setState({
			formName:e.target.value
		})
	}
	
	//Process cancel button
	cancelProcess = () => {
		this.setState({
			modal:false,
			formName:null
			});
	}
	
	//Process submit button
	submitProcess = () => {
		console.log(this.state.formName);
		this.setState({
			modal:false
			});
	}
	
	//Function to toggle editNameModal
	toggle = (e) => {
		console.log("Hello");
		console.log(e.target.name);
		if(this.state.modal === false)
		{
			this.setState({
			modal:true
			});
		}
		else{
			if(this.state.formName != null){
				this.setState({
				modal:false
				});
			}
			else{
				window.location.reload();
			}
		}
	}
	
	render(){
		return(
			(this.state.formName === null)?
				(<EditNameModal toggle={this.toggle} modal={this.state.modal} setFormName={this.setFormName} cancelCreate={this.cancelProcess} submitCreate={this.submitProcess} edit={true} getNames={this.getFormNames}/>):
				(<FormBuilder formName={this.state.formName} formDesc={this.state.desc}/>)
		)
		
	}

}

export default EditForm;