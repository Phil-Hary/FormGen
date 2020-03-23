import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import FormNameModal from './formNameModal';
import FormBuilder from './formBuilder';
import axios from 'axios';

/*
DESCRIPTION

component: CreateNewForm

Desc:
	This is copomonets checks if a form name is selected and based on that calls formNameModal or 
	FormBuilder

*/

class CreateNewForm extends React.Component{
	
	constructor(){
		super();
		this.state = {
			modal:true,
			formName:null,
			desc:null
		}
	}
	
	shouldComponentUpdate(){
		if(this.state.modal==true)
			return false;
		return true;
	}
	
	//Sets form name
	setFormName = (e) => {
		
		this.setState({
			formName:e.target.value
		})
	}
	
	//Sets Form Desc
	setDesc = (e) => {

		this.setState({
			desc:e.target.value
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
		this.setState({
			modal:false
			});
	}
	
	//Function to toggle formNameModal
	toggle = (e) => {

		if(this.state.modal === false)
		{
			this.setState({
			modal:true
			});
		}
		else{
			if(this.state.formName != null && this.state.desc != null){
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
				(<FormNameModal toggle={this.toggle} modal={this.state.modal} setFormName={this.setFormName} cancelCreate={this.cancelProcess} submitCreate={this.submitProcess} setDesc={this.setDesc} edit={false}/>):
				(<FormBuilder formName={this.state.formName} formDesc={this.state.desc}/>)
		)
		
	}

}

export default CreateNewForm;