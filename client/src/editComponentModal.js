import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

/*
DESCRIPTION

component: EditComponentModal

Desc:
	This is modal is used to edit the details of a form component

*/

class EditComponentModal extends React.Component{
	
	
	constructor(props){
		super(props);
		this.count = props.count;
		this.state = {
			inputType:"",
			placeholder:"",
			question:"",
			questionNo:"",
			option1:"",
			option2:"",
			option3:"",
			error:""
		}
	}
	
	//Sets the component to be edited
	setComponent=(e)=>{

		this.setState({
			currentComponent:e.target.value,
			inputType:e.target.value
		})
	}
	
	//Validates the data to be edited
	validate =(e) =>{
		e.preventDefault();
		
		if(this.state.currentComponent == "text" || this.state.currentComponent == "textArea"){
			if(this.state.inputType!="" && this.state.placeholder!=""){

				axios
				.post('/admin/updateForm', {
					inputType:this.state.inputType,
					placeholder:this.state.placeholder,
					question:this.state.question,
					option1:this.state.option1,
					option2:this.state.option2,
					option3:this.state.option3,
					questionNo:this.state.questionNo,
					formName:this.props.currentForm
				  })
				.then((data)=>{
					this.setState({
						inputType:"",
						placeholder:"",
						question:"",
						questionNo:"",
						option1:"",
						option2:"",
						option3:"",
						error:""
					})
					this.props.toggle();
					this.props.getFormData();
				})
					
				.catch((data)=>{
					this.setState({
						error:"Error ocuured"
					})
				})
			}
			else{
				this.setState({
					error:"Enter Valid Details1"
				})
			}
		}
		
		else{
			if(this.state.inputType!="" && this.state.question !="" && this.state.option1!="" && this.state.option2!="" && this.state.option3!=""){

				axios
				.post('/admin/updateForm', {
					inputType:this.state.inputType,
					placeholder:this.state.placeholder,
					question:this.state.question,
					option1:this.state.option1,
					option2:this.state.option2,
					option3:this.state.option3,
					questionNo:this.state.questionNo,
					formName:this.props.currentForm
				  })
				.then((data)=>{
					this.setState({
						inputType:"",
						placeholder:"",
						question:"",
						questionNo:"",
						option1:"",
						option2:"",
						option3:"",
						error:""
					})
					this.props.toggle();
					this.props.getFormData();
				})
					
				.catch((data)=>{
					this.setState({
						error:"Error ocuured"
					})
				})
			}
			else{
				this.setState({
					error:"Enter Valid Details2"
				})
			}
		}
	}
	
	//Set values entered in the modal
	setValues=(e)=>{
		switch(e.target.name){
			case "placeholder":
				this.setState({
					placeholder:e.target.value
				});
				break;
			
			case "question":
				this.setState({
					question:e.target.value
				});
				break;
				
			case "option1":
				this.setState({
					option1:e.target.value
				});
				break;
			
			case "option2":
				this.setState({
					option2:e.target.value
				});
				break;
				
			case "option3":
				this.setState({
					option3:e.target.value
				});
				break;
			
			case "questionNo":
				this.setState({
					questionNo:e.target.value
				});
				break;
		}
	}
	
	//Display the respective componenet based on the types
	DisplayComponent(){
		switch(this.props.selectedComponent.type){
								  case "text":
									return(
										<div>
											<form>
											  <div class="form-group">
												<div class="form-group">
												<label for="questionNo">Question No</label>
												<input type="text" className="form-control col-lg-6" name="questionNo" value={this.state.questionNo} onChange={this.setValues} placeholder={this.props.questionNo}/>
											  </div>
												<label for="inputType">Input Type</label>
												<input type="text" className="form-control col-lg-6" name="inputType" value="text"/>
											  </div>
											  <div class="form-group">
												<label for="placeholder">Plaeholder</label>
												<input type="text" class="form-control col-lg-6" name="placeholder" value={this.state.placeholder} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="question">Question</label>
												<input type="text" class="form-control col-lg-6" name="question"  value={this.state.question} onChange={this.setValues}/>
											  </div>
											</form>
										</div>
									)
								
									case "textArea":
									return(
										<div>
											<form>
											  <div class="form-group">
												<label for="questionNo">Question No</label>
												<input type="text" className="form-control col-lg-6" name="questionNo" value={this.state.questionNo} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="inputType">Input Type</label>
												<input type="text" className="form-control col-lg-6" name="inputType" value="textArea"/>
											  </div>
											  <div class="form-group">
												<label for="placeholder">Plaeholder</label>
												<input type="text" class="form-control col-lg-6" name="placeholder"value={this.state.placeholder} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="question">Question</label>
												<input type="text" class="form-control col-lg-6" name="question"  value={this.state.question} onChange={this.setValues}/>
											  </div>
											</form>
										</div>
									)
									
									case "radio":
									return(
										<div>
											<form>
											  <div class="form-group">
												<label for="questionNo">Question No</label>
												<input type="text" className="form-control col-lg-6" name="questionNo" value={this.state.questionNo} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="inputType">Input Type</label>
												<input type="text" className="form-control col-lg-6" name="inputType" value="radio"/>
											  </div>
											  <div class="form-group">
												<label for="question">Question</label>
												<input type="text" class="form-control col-lg-6" name="question"  value={this.state.question} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option1">Option 1</label> 
												<input type="text" class="form-control col-lg-6" name="option1" value={this.state.option1} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option2">Option 2</label>
												<input type="text" class="form-control col-lg-6" name="option2" value={this.state.option2} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option3">Option 3</label>
												<input type="text" class="form-control col-lg-6" name="option3" value={this.state.option3} onChange={this.setValues}/>
											  </div>
											</form>
										</div>
									)
									
									case "checkbox":
									return(
										<div>
											<form>
											  <div class="form-group">
												<label for="questionNo">Question No</label>
												<input type="text" className="form-control col-lg-6" name="questionNo" value={this.state.questionNo} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="inputType">Input Type</label>
												<input type="text" className="form-control col-lg-6" name="inputType" value="checkbox" onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="question">Question</label>
												<input type="text" class="form-control col-lg-6" name="question"  value={this.state.question} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option1">Option 1</label>
												<input type="text" class="form-control col-lg-6" name="option1" value={this.state.option1} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option2">Option 2</label>
												<input type="text" class="form-control col-lg-6" name="option2" value={this.state.option2} onChange={this.setValues}/>
											  </div>
											  <div class="form-group">
												<label for="option3">Option 3</label>
												<input type="text" class="form-control col-lg-6" name="option3" value={this.state.option3} onChange={this.setValues}/>
											  </div>
											</form>
										</div>
									)
							  }
	}
	
	render(){

		return(
			<Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-lg" contentClassName="modal-custom-style">
				<ModalHeader toggle={this.props.toggle}>{this.props.currentForm}</ModalHeader>
				<ModalBody>
					<form>
						<label for="components">Choose Type</label>
						  <div class="form-group">
							<label for="inputType">Input Type</label>
							<select id="components" onChange={this.setComponent} value={this.props.selectedComponent.type} disabled>
							  <option value="">Select a component</option>
							  <option value="text">Text</option>
							  <option value="textArea">TextArea</option>
							  <option value="radio">Radio Button</option>
							  <option value="checkbox">Check Box</option>
							</select>
						  </div>
						  {
							  this.DisplayComponent()
						  }
						  <p>{this.state.error}</p>
					</form>
				</ModalBody>
				<ModalFooter>
				  <Button color="primary" onClick={this.validate}>Update</Button>{' '}
				  <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default EditComponentModal;