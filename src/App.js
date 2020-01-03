import React, { Component, Fragment } from 'react';
import {calculateTotal} from './helper';
import './App.css';

import './normalize.css';
import './skeleton.css';
import Form from './components/Form';

class App extends Component{
  loanInformation = (amount, terms) => {
    const total = calculateTotal(amount, terms);
    console.log('Total', total);
  }
  render(){
    return (
      <Fragment>
        <h1>Loan Calculator</h1>
        <div className="container">
          <Form 
            loanInformation={this.loanInformation}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
