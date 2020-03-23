import React from 'react';
import axios from 'axios';
import Form from './form.js';

/*
DESCRIPTION

component: RenderForm

Desc:
	Responsible for generating the form for user

*/

class RenderForm extends React.Component {

	constructor(props) {
      super(props);
	  this.state = {
		  formDetails:"",
		  modal:false
	  }
    }
	
	toggle = (e) => {
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
	
	componentDidMount(){
		console.log(this.props.match.params.formName);
		axios
			.post('/admin/getSpecificForm', {
				formName: this.props.match.params.formName
			  })
			 .then((data)=>{
				 data.data.map(forms => {
					 console.log(forms)
					  this.setState({
						formDetails : forms.formData,
						modal:true
					 })
					 
				 });
			 })
			 .catch((data)=>{
				 console.log("Form not Found");
			 })
	}

  render() {
	  return (
		(this.state.formDetails=="")?(<p>Form not found</p>):(<Form formData={this.state.formDetails} formName={this.props.match.params.formName} toggle={this.toggle} modal={this.state.modal}/>)
	  );
	}
}	

export default RenderForm;