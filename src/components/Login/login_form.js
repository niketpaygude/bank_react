import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import "./login.css";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react';
import { loginData } from "./login_data";
import { useHistory } from "react-router-dom";

//const history = useHistory();


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
      error: ''
		};
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.handlePwdChange = this.handlePwdChange.bind(this);
	
  }

  handleUserChange(event) {
    this.setState({username: event.target.value});
  }

  handlePwdChange(event) {
    this.setState({pwd: event.target.value});
  }
  
  

  handleSubmit(event) {
	  
	event.preventDefault();
	
	if (!this.state.username) {
		  return this.setState({ error: 'Username is required' });
		}

	if (!this.state.pwd) {
	  return this.setState({ error: 'Password is required' });
	}
	
	let itemFound = false;
	 loginData.map((job, index) => {
		if(job.user == this.state.username && job.pwd == this.state.pwd){
		  itemFound = true;
		}
	 });	  
    if(!itemFound)
	{
		return this.setState({ error: 'Invalid Username and Password!' });
	}
	
  return this.setState({ error: '' });
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
		  <label>User Name</label>
		  <input type="text" data-test="username" value={this.state.value} onChange={this.handleUserChange} />
		  <br/>
		  <label>Password</label>
		  <input type="password" data-test="password" value={this.state.value} onChange={this.handlePwdChange} />
		  <br/>
 			<button>
			  Login
			</button>
		  
		  { this.state.error }
      </form>
    );
  }
}

export { MyForm };