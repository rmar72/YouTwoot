import React, {Component} from 'react';

const emailRegex = /\S+@\S+\.[a-zA-Z]/;

class EmailInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            validEmail: null
        }
    }

    emailInputHandler = (e) =>{
        this.setState({email: e.target.value});

        if(this.state.email.match(emailRegex))
            this.setState({validEmail: true});
    }
    
    validEmailHandler = () =>{
        let {validity: {valueMissing, valid}, value} = this.refs.EmailInput;

        if(!valueMissing && valid && value.match(emailRegex) )
            this.setState({validEmail: true});
        else 
            this.setState({validEmail: false});
    }
    
    inputRetype = () =>{
        this.setState({validEmail: null});
    }

    render(){
        return (
            <div className="form-group">
                <label className="control-label">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className = { 'form-control ' + ( this.state.validEmail != null ?
                                                    ( this.state.validEmail ? "is-valid" : "is-invalid") : '') }
                    value={this.state.email}
                    onChange={this.emailInputHandler}
                    onBlur={this.validEmailHandler}
                    onClick={this.inputRetype}
                    required
                    ref="EmailInput"
                />
                    {
                        this.state.validEmail ? '' : 
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                    }
            </div>
        )
    }
}

export default EmailInput;