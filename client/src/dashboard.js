import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CreateNewForm from './createNewForm';
import Responses from './response';
import ViewModal from './viewModal';
import LinkGenModal from './linkGenModal';
import App from './App';

class Dashboard extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			formData:[],
			modal :false,
			currentForm:'',
			linkModal:false
		}
		
	}
	
	toggle = (e) => {
		console.log("Hello");
		console.log(e.target.name);
		if(this.state.modal === true)
		{
			this.setState({
			currentForm:'',
			modal:false
			});
		}
		else{
			this.setState({
			currentForm:e.target.name,
			modal:true
			});
		}
	}
	
	linkGenToggle = (e) => {
		if(this.state.linkModal === true)
		{
			this.setState({
				currentForm:'',
				linkModal:false
			});
		}
		else{
			this.setState({
				currentForm:e.target.name,
				linkModal:true
			});
		}
	}
	
		
	formLayout =() => {
		const formStruct=[];
		const data = this.state.formData;
		
		return(
			<div>
			{data.map((form,index)=>{
				return(
					<div class="card text-white bg-secondary mb-3">
						<div class="card-header">{form.formName}</div>
						  <div class="card-body">
							<h6 class="card-title">Description : </h6>
							<p>{form.desc}</p>
							<p class="card-text">Responses : {form.resCount}</p>
							<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1" onClick={this.toggle} name={form.formName}>View Responses</button>
							<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1" onClick={this.linkGenToggle} name={form.formName}>Generate Link</button>
							<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1">Delete Form</button>
							{(this.state.linkModal === true)?(<LinkGenModal toggle={this.linkGenToggle} modal={this.state.linkModal} formName={this.state.currentForm}/>):(false)}
							{(this.state.modal === true)?(<ViewModal toggle={this.toggle} modal={this.state.modal} formDetails={this.state.formData} currentForm={this.state.currentForm}/>):(false)}
						  </div>
					</div>
				)
			})}
			</div>
		)
	}
	

	
	componentDidMount(){
		axios
			.get('http://localhost:5000/admin/dashboard')
			.then((res)=>{
				console.log(res.data);
				this.setState({
					formData:res.data}
				);
			})
			.catch((data)=>{
				console.log("Error");
			})
		
	}
	
	render(){
		
				
		return(
			
			(this.state.formData == "No forms available")?(<p>{this.state.formData}</p>):(
				
				<div>
					<p> Forms </p>
					{this.formLayout()}
				</div>
			)
			
		)
	}

}

export default Dashboard;