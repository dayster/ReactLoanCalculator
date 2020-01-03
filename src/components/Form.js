import React, {Component} from 'react';

class Form extends Component{
    state = {
        amount: '',
        terms: ''
    }
    handleChange = (e) => {
        // Read Form
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    validateForm = () => {
        const {amount, terms} = this.state;
        const notValid = !amount || !terms;
        return notValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Read Value
        const {amount, terms} = this.state;
        // Pass Component
        this.props.loanInformation(amount, terms);
    }
    render(){
        const {amount, terms} = this.state;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label>Amount</label>
                    <input 
                        onChange={this.handleChange}
                        id="name"  
                        name="amount" 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Eg:3000" />
                </div>
                <div>
                    <label>Months to Repay</label>
                    <select 
                        onChange={this.handleChange}
                        name="terms" 
                        className="u-full-width">
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>
                <div>
                    <input 
                        disabled={this.validateForm()}
                        type="submit" 
                        value="Calculate" 
                        className="u-full-width button-primary" />
                </div>
            </form>
        )
    }
}

export default Form;