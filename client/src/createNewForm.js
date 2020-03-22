import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import FormNameModal from './formNameModal';
import FormBuilder from './formBuilder';
import axios from 'axios';

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
	
	setFormName = (e) => {
		console.log(e.target.value);
		this.setState({
			formName:e.target.value
		})
	}
	
	setDesc = (e) => {
		console.log(e.target.value);
		this.setState({
			desc:e.target.value
		})
	}
	
	cancelProcess = () => {
		this.setState({
			modal:false,
			formName:null
			});
	}
	
	submitProcess = () => {
		this.setState({
			modal:false
			});
	}
	
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