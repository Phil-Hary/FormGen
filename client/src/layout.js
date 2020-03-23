import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import CreateNewForm from './createNewForm';
import DashBoard from './dashboard';
import ViewModal from './viewModal';
import EditForm from './editForm';
import RenderForm from './renderForm';
import Home from './home';

/*
DESCRIPTION

component: Layout

Desc:
	This component is responsible for navigation though the application

*/

class Layout extends React.Component{
	
	constructor(){
		super();
		this.state = {
			reload:false
		}
	}
	
	render(){
		return(
			<div>
			<Router>
				<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
				  <Link className="navbar-brand" to="/">FormGen</Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					  <Link className="nav-item nav-link" to="/dashboard">DashBoard</Link>
					  <Link className="nav-item nav-link" to="/createForm">Create Form</Link>
					  <Link className="nav-item nav-link" to="/editForm">Edit Form</Link>
					  <Link to="/user/:formName"/>
					  <Link className="nav-item nav-link justify-content-end" to="/logout">Logout</Link>
					</div>
				  </div>
				</nav>
				<Switch>
					<Route path='/createForm' component={CreateNewForm}/>
					<Route path='/dashboard' component={DashBoard}/>
					<Route path='/viewResponse' component={ViewModal}/>
					<Route path='/editForm' component={EditForm}/>
					<Route path='/user/:formName' component={RenderForm}/>
					<Route path='/logout' render={()=>{
						window.localStorage.clear();
						return(<Redirect to="/"/>)
					}}/>
					<Route exact path='/' component={Home}/>
				</Switch>
			</Router>
			</div>
		)
	}

}

export default Layout;