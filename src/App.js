import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MyForm } from "./components/Login/login_form";
import { ViewMyTranaction } from "./components/Viewtransaction/view_transaction";
import { Makepayment } from "./components/Makepayment/make_payment";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/viewtransaction">
            <ViewTransactionPage />
          </Route>
          <Route path="/makepayment">
            <MakePaymentPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  return <h2><MyForm/></h2>;
}

function ViewTransactionPage() {
  return <h2><ViewMyTranaction/></h2>;
}

function MakePaymentPage() {
	return <h2><Makepayment/></h2>;
}	
