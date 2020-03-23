import React, { useState } from 'react';
import { Collapse, CardBody, Card, CardHeader, Row } from 'reactstrap';

/*
DESCRIPTION

component: IndividualResponse

Desc:
	This builds and displays the reponse of the user

*/

class IndividualResponse extends React.Component {

	constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
	  console.log(props.responseData);
      this.state = { 
		collapse: "", 
		users: props.responseData
		};
    }

	toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === event ? 0 : event });
    }

  render() {
	  const {cards, collapse} = this.state;
	  return (
		<div className="container">
			<h3 className="page-header">Responses</h3>
			{
			  this.state.users.map(user => {
			  return (

				<Card style={{ marginBottom: '1rem' }} key={user.userName}>
				  <CardHeader onClick={this.toggle} data-event={user.userName}>{user.userName}</CardHeader>
				  <Collapse isOpen={collapse === user.userName}>
				  <CardBody>
				  <table className="table table-dark">
					<thead>
					  <tr>
						<td>Question No</td>
						<td>Question</td>
						<td>Response</td>
					  </tr>
					</thead>
					<tbody>
				  {
					  user.answers.map((answer)=>{
						  console.log(answer.question);
						  return(
							<tr>
							<td>{answer.questionNo}</td>	
							<td>{answer.question}</td>
							<td>{answer.answer}</td>
						  </tr>
						  )
					  })
				  }
				  </tbody>
				  </table>
				  </CardBody>
				  </Collapse>
				</Card>
			  )
			})}     

		  </div>
	  );
	}
}

export default IndividualResponse;