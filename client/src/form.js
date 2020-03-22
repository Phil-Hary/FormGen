import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Form = (props) => {
	
	console.log("here");
	let components =[];
	
	const createForm = () => {
		//console.log(formComponent);
		
		props.formData.map((formComponent)=>{
			switch(formComponent.inputType){
				case "text":
					components.push(
						<div class="form-group">
							<label for={formComponent.questionNo}>{formComponent.question}</label>
							<input className="form-control col-lg-6" type="text" value="" placeholder={formComponent.placeholder}/>
						</div>
					)
					break;
				
				case "textArea":
					components.push(
						<div class="form-group">
							<label for={formComponent.questionNo}>{formComponent.question}</label>
							<textarea class="form-control col-lg-6" id={formComponent.questionNo} rows="3" placeholder={formComponent.placeholder}></textarea>
						</div>
					)
					break;
				
				case "email":
					components.push(
						<div class="form-group">
							<label for={formComponent.questionNo}>{formComponent.question}</label>
							<input className="form-control col-lg-6" type="email" value="" placeholder={formComponent.placeholder}/>
						</div>
					)
					break;
				
				case "checkBox":
					components.push(
						<div>
							<label for={formComponent.questionNo}>{formComponent.question}</label>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id={formComponent.option1}/>
								<label class="form-check-label" for={formComponent.option1}>
									{formComponent.option1}
								 </label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id={formComponent.option2}/>
								<label class="form-check-label" for={formComponent.option2}>
									{formComponent.option2}
								 </label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id={formComponent.option3}/>
								<label class="form-check-label" for={formComponent.option3}>
									{formComponent.option3}
								 </label>
							</div>
						</div>
					)
					break;
				
				case "radio":
					components.push(
						<div>
							<label for={formComponent.questionNo}>{formComponent.question}</label>
							<div class="form-check">
							  <input class="form-check-input" type="radio" name="exampleRadios" id={formComponent.option1} value={formComponent.option1}/>
							  <label class="form-check-label" for={formComponent.option1}>
								{formComponent.option1}
							  </label>
							</div>
							<div class="form-check">
							  <input class="form-check-input" type="radio" name="exampleRadios" id={formComponent.option2} value={formComponent.option2}/>
							  <label class="form-check-label" for={formComponent.option2}>
								{formComponent.option2}
							  </label>
							</div>
							<div class="form-check">
							  <input class="form-check-input" type="radio" name="exampleRadios" id={formComponent.option3} value={formComponent.option3}/>
							  <label class="form-check-label" for={formComponent.option3}>
								{formComponent.option3}
							  </label>
							</div>
						</div>
					)
					break;
			}
		});
		
		return components;
		
		}
		
		console.log(props.formName);
		
		return (
				<Modal isOpen={props.modal} toggle={props.toggle} className="modal-lg" contentClassName="modal-custom-style">
					<ModalHeader toggle={props.toggle}>{props.formName}</ModalHeader>
					<ModalBody>
					<form className="offset-lg-2">
					{
						createForm()
						
					}	
					</form>
				</ModalBody>
				<ModalFooter>
				  <Button color="secondary" onClick={props.toggle}>Submit</Button>
				</ModalFooter>
			</Modal>
			)
	}

export default Form;