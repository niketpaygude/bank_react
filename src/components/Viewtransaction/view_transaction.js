import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react';
import { transactionData } from "./transaction_data";
import { useHistory } from "react-router-dom";
import { JsonToTable } from "react-json-to-table";

//const history = useHistory();


class ViewMyTranaction extends React.Component {	
  constructor () {
    super();
    this.state = { data: null };
  }
  
  render () {
    return <div><JsonToTable json={transactionData} /></div>;
  }
}

export { ViewMyTranaction };