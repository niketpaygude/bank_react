import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react';
import { payment_data } from "./payment_data";
import { payment_record } from "./payment_type";
import { useHistory } from "react-router-dom";
import { JsonToTable } from "react-json-to-table";

//const history = useHistory();


class Makepayment extends React.Component {	
  constructor () {
    super();
    this.state = {
      amount: '',
      error: '',
	  msg:''
		};
	this.handleFeedAmount = this.handleFeedAmount.bind(this);
	this.handleMakePayment = this.handleMakePayment.bind(this);
  }
  
  handleFeedAmount(event) {
    this.setState({amount: event.target.value});
  }
  
  handleMakePayment(event) {
	event.preventDefault();
	if (!this.state.amount) {
		  return this.setState({ error: 'Amount is required' });
		}
	if (this.state.amount < 1000) {
		  this.setState({ msg: '' })	
		  return this.setState({ error: 'Amount should be greater  than 1000' });
		}
	if (!this.state.error) {
		return this.setState({ msg: 'Payment done succesfully!' });
	}
	
	return this.setState({ error: '' });
	
  }	  
  
  render() {
    return (
      <form onSubmit={this.handleMakePayment}>
		  <div>
			<label>Payment method :</label>
			<select>
				<option selected disabled="true"> Select Payment type </option>
				{
					payment_record.map((result, index)=>(<option text={result.id}>{result.type}</option>))
				}
			</select>
			<br/>
			<label>Enter Amount  :</label>
			<input type="number" data-test="amount" value={this.state.value} onChange={this.handleFeedAmount} />
			<br/>
 			<button>
			  Make Payment
			</button>
			{ this.state.error }
			{ this.state.msg }
		  </div>
      </form>
    );
  }
}

export { Makepayment };
