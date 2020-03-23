import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*
DESCRIPTION

component: Home

Desc:
	This display the Admin hompage

*/

const Home = (props) => {
		
		return (
			<div className='container1'> 
				<div>
					<h1 align="center" className="fontColor">Hi there !!!</h1>
				</div>
					<table className="home">
					<tr>
						<td className="offset-lg-8">
							<img className="zoom" src="/dashboard.png" width="100px" height="100px"/>
						</td>
						<td>
							<h3 className="fontColor">Dashboard</h3><br/>
							<h5 className="fontColor">One place for all Admin stuffs</h5>
						</td>
					</tr>
				
					<tr>
						<td className="offset-lg-8">
							<img className="zoom" src="/pen.png" width="100px" height="100px"/>
						</td>
						<td>
							<h3 className="fontColor">Create Form</h3><br/>
							<h5 className="fontColor">Helps to create a new Form</h5>
						</td>
					</tr>
					<tr>
						<td className="offset-lg-8">
							<img className="zoom" src="/gear.png" width="100px" height="100px"/>
						</td>
						<td>
							<h3 className="fontColor">Edit Form</h3><br/>
							<h5 className="fontColor">HElps to fine tune your existing forms</h5>
						</td>
					</tr>
				</table>
				<p align="center" className="fontColor">Select Dashboard from the navbar to continue...</p>
			</div>
			)
	}

export default Home;