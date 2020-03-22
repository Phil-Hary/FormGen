import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateNewForm from './createNewForm';
import DashBoard from './dashboard';
import ViewModal from './viewModal';
import EditForm from './editForm';
import RenderForm from './renderForm';
import Home from './home';

class Layout extends React.Component{
	
	constructor(){
		super();
		this.state = {
			reload:false
		}
	}
	/*
	reloadParentComponent =() => {
		console.log('Calling');
		if(this.state.reload == true){
			this.setState({
			reload:false
			})
		}
		else{
			this.setState({
			reload:true
			})
		}
		
	}*/
	
	componentDidMount(){
		console.log(this.state.reload);
	}
	
	render(){
		return(
			<div>
			<Router>
				<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
				  <a className="navbar-brand" href="#">FormGen</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					  <Link className="nav-item nav-link active" to="/dashboard">DashBoard <span className="sr-only">(current)</span></Link>
					  <Link className="nav-item nav-link" to="/createForm">Create Form</Link>
					  <Link className="nav-item nav-link" to="/editForm">Edit Form</Link>
					  <Link to="/user/:formName"/>
					</div>
				  </div>
				</nav>
				<Switch>
					<Route path='/createForm' component={CreateNewForm}/>
					<Route path='/dashboard' component={DashBoard}/>
					<Route path='/viewResponse' component={ViewModal}/>
					<Route path='/editForm' component={EditForm}/>
					<Route path='/user/:formName' component={RenderForm}/>
					<Route exact path='/' component={Home}/>
				</Switch>
			</Router>
			</div>
		)
	}

}

export default Layout;