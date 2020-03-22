import React from 'react';
import axios from 'axios';
import AddModal from './addModal';
import EditModal from './editComponentModal';

class FormBuilder extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formName:this.props.formName,
			formDetails:"",
			modal:false,
			editModal:false,
			count:0,
			editState:{
				questionNo:"",
				type:"",
				placeholder:"",
				question:"",
				option1:"",
				option2:"",
				option3:"",
			}
			
		}
	}
	
	toggle = (e) => {
		console.log("Hello");
		if(this.state.modal === true)
		{
			this.setState({
			modal:false
			});
		}
		else{
			this.setState({
			modal:true
			});
		}
	}
	
	editToggle = (e) => {
		console.log("Here "+e.target.name);
		console.log("Here1 "+e.target.getAttribute('data-placeholder'));
		console.log("Here1 "+e.target.getAttribute('data-question'));
		
		let editState = {
				questionNo:"",
				type:"",
				placeholder:"",
				question:"",
				option1:"",
				option2:"",
				option3:"",
			}
		
		if(e.target.name == "edit"){
			editState.questionNo = e.target.getAttribute('data-no');
			editState.type = e.target.getAttribute('data-type');
			editState.placeholder = e.target.getAttribute('data-placeholder');
			editState.question=e.target.getAttribute('data-question');
			editState.option1 = e.target.getAttribute('data-option1');
			editState.option2 = e.target.getAttribute('data-option2');
			editState.option3 = e.target.getAttribute('data-option3');
			console.log(editState);
			this.setState({
				editState:editState
				
			})
		}
		if(this.state.editModal === true)
		{
			this.setState({
			editModal:false
			});
		}
		else{
			this.setState({
			editModal:true
			});
		}
	}
	
	getCurrentComponentDetails=()=>{
		console.log(this.state);
		return this.state.editState;
	}
/*	
	setQuestionCount = (count) => {
		console.log("Calling");
		this.setState({
						count : count
					 })
	}*/
	
	setAddState = (state) => {
		this.setState({
			addState:state
		})
	}
	
	getFormData=()=>{
		axios
			.post('/admin/getSpecificForm', {
				formName: this.props.formName
			  })
			 .then((data)=>{
				 data.data.map(forms => {
					 console.log(forms)
					  this.setState({
						formDetails : forms.formData
					 })
					 
				 });
			 })
			 .catch((data)=>{
				 console.log("Fetch Failed");
			 })
			 
		
	}
	
	componentDidMount(){
		console.log(this.props.formName);
		if(this.props.formDesc != null){
			axios
			.post('http://localhost:5000/admin/createNewForm', {
				formName: this.props.formName,
				formDesc: this.props.formDesc
			  })
			.then(
				this.getFormData()
			  )
			.catch("Error")
		}
		else{
			this.getFormData()
		}
	}
	
	populateComponents(){
		let components =[];
		let count = 0;
		
		if(this.state.formDetails !=[]){
			components=[]
			this.state.formDetails.map((component)=>{
				console.log(component);
				count++;
				switch(component.inputType){
					case "text":
					case "textArea":
						console.log("Inserting1");
						components.push(
							<div class="card text-white bg-secondary mb-3">
								<div class="card-header">{"Question No "+ component.questionNo}</div>
								  <div class="card-body">
									<form>
									  <div class="form-group">
										<label for="inputType">Input Type</label>
										<input type="text" className="form-control col-lg-6" id="inputType" value={component.inputType}/>
									  </div>
									  <div class="form-group">
										<label for="placeholder">Plaeholder</label>
										<input type="text" class="form-control col-lg-6" id="placeholder" value={component.placeholder}/>
									  </div>
									  <div class="form-group">
										<label for="question">Question</label>
										<input type="text" class="form-control col-lg-6" id="question" value={component.question}/>
									  </div>
									 </form>
									<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1" onClick={this.editToggle} name="edit"
									data-no={component.questionNo}
									data-type={component.inputType}
									data-place={component.placeholder}
									data-question={component.question}
									>Edit Component</button>
									</div>
							</div>
							
						);
						break;
					
					case "email":
						console.log("Inserting2");
						components.push(
							<div class="card text-white bg-secondary mb-3 col=lg-10">
								<div class="card-header">{"Question No "+ component.questionNo}</div>
								  <div class="card-body">
									<form>
									  <div class="form-group">
										<label for="inputType">Input Type</label>
										<input type="text" className="form-control col-lg-6" id="inputType" value={component.inputType}/>
									  </div>
									  <div class="form-group">
										<label for="placeholder">Placeholder</label>
										<input type="text" class="form-control col-lg-6" id="placeholder" value={component.placeholder}/>
									  </div>
									  <div class="form-group">
										<label for="question">Question</label>
										<input type="text" class="form-control col-lg-6" id="question" value={component.question}/>
									  </div>
									 </form>
									<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1" onClick={this.editToggle} name="edit"
									data-no ={component.questionNo}
									data-type={component.inputType}
									data-placeholder={component.placeholder}
									data-question={component.question}>
									Edit Component</button>
									</div>
							</div>						
						);
						break;
					
					case "radio":
					case "checkBox":
						console.log("Inserting2");
						components.push(
							<div class="card text-white bg-secondary mb-3 col=lg-10">
								<div class="card-header">{"Question No "+ component.questionNo}</div>
								  <div class="card-body">
									<form>
									  <div class="form-group">
										<label for="inputType">Input Type</label>
										<input type="text" className="form-control col-lg-6" id="inputType" value={component.inputType}/>
									  </div>
									  <div class="form-group">
										<label for="question">Question</label>
										<input type="text" class="form-control col-lg-6" id="question" value={component.question}/>
									  </div>
									  <div class="form-group">
										<label for="option1">Option 1</label>
										<input type="text" class="form-control col-lg-6" id="option1" value={component.option1}/>
									  </div>
									   <div class="form-group">
										<label for="option2">Option 2</label>
										<input type="text" class="form-control col-lg-6" id="option2" value={component.option2}/>
									  </div>
									   <div class="form-group">
										<label for="option3">Option 3</label>
										<input type="text" class="form-control col-lg-6" id="option3" value={component.option3}/>
									  </div>
									 </form>
									<button type="button" class="btn btn-outline-dark col-lg-2 offset-lg-1" onClick={this.editToggle} name="edit"
									data-no ={component.questionNo}
									data-type={component.inputType}
									data-question={component.question}
									data-option1={component.option1}
									data-option2={component.option2}
									data-option3={component.option3}
									>Edit Component</button>
									</div>
							</div>						
						);
						break;
						
				}
			})
		}
		console.log(components);
		return components;
	}
	
	render(){
		console.log(this.state.formDetails);
		//this.populateComponents()
		
		return(
		<div>
			<AddModal toggle={this.toggle} modal={this.state.modal} currentForm={this.props.formName} counter={this.setQuestionCount} count={this.state.count} getFormData={this.getFormData} setAddState={this.setAddState}/>
			<EditModal toggle={this.editToggle} modal={this.state.editModal} selectedComponent={this.state.editState} getFormData={this.getFormData} currentForm={this.props.formName} getCurrentComponentDetails={this.getCurrentComponentDetails}/>
			<table>
				<tr>
					<td>
						<p>Form Name : {this.props.formName}</p>
					</td>
				</tr>
				<tr>
					<td>
						<div>
								<button type="button" class="btn btn-outline-secondary" onClick={this.toggle}>Add Component</button>
								<br/>
						</div>
					</td>
				</tr>
			</table>
			{this.populateComponents()}
		</div>);
	}
	
}

export default FormBuilder;