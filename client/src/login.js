import React from 'react';
import LayOut from './layout';

class Login extends React.Component{

constructor(){
  super();
  this.state = {
    username:"",
    password:"",
    error:""
  }
  this.handleUserName = this.handleUserName.bind(this);
  this.handlePassword = this.handlePassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

/* shouldComponentUpdate(nextProps){
    if(nextProps.userDetails.loading===true){
      console.log("False")
      return false
    }
    else{
      console.log("True")
      return true
    }
  }*/

handleUserName(e){
  this.setState({
    username:e.target.value
  })

}

handlePassword(e){
   this.setState({
    password:e.target.value
  })
}

onSubmit(e){
  e.preventDefault();
  if(this.state.username==="" || this.state.password===""){
    this.setState({
    error:"Enter valid credentials logging in"
  })
  }
  else{
	  if(this.state.username==="Admin" || this.state.password==="123"){
		  //Route to next screen
			localStorage.setItem('userName','Admin');
			localStorage.setItem('password','123');
		   this.setState({
			error:"HI"
		});
	  }
	  else{
		 this.setState({
			error:"Enter valid credentials before loggging"
		});
	  }
    }
      
  }

render()
{
  return(
		(localStorage.userName == "Admin" && localStorage.password == '123')?<LayOut/>:(
      <div className="container1">
        <p className="LogHead offset-sm-4 col-sm-4"> Form Generator</p>
          <div className="area1 offset-sm-4 col-sm-4">
            <form style={{marginTop:"100px"}}>
              <p className="error">{this.state.error}</p>
              <div className="form-group">
                <label htmlFor="username" className="username">User Name</label>
                <input type="text" className="form-control" placeholder="User Name" name="username" value={this.state.username}
                onFocus={(e)=>{e.target.placeholder="";
                e.target.previousSibling.style.visibility="visible";}}
                onBlur={
                  (e)=>{e.target.placeholder="User Name";
                  if(e.target.value!==""){
                     e.target.previousSibling.style.visibility="visible";
                  }
                  else{
                   e.target.previousSibling.style.visibility="hidden";
                  }}} autoComplete="off" onChange={this.handleUserName}/><br/>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password}
                onFocus={(e)=>{
                  e.target.placeholder=""
                  e.target.previousSibling.style.visibility="visible";
                }}
                onBlur={
                  (e)=>{e.target.placeholder="Password";
                   if(e.target.value!==""){
                     e.target.previousSibling.style.visibility="visible";
                  }
                  else{
                   e.target.previousSibling.style.visibility="hidden";
                  }
                 }
                } onChange={this.handlePassword}/>
              </div>
              <button className="btn btn-outline-primary offset-sm-4 col-sm-4" style={{marginTop:"40px"}} onClick={this.onSubmit}>Login</button>
            </form>
          </div>
       </div>
  ))}
}

export default Login;