import React, {Component} from "react";

const emailRegex = /\S+@\S+\.[a-zA-Z]/;

class EmailInput extends Component {
    constructor(props){
        super(props);
        this.EmailInput = React.createRef();

        this.state = {
            email: "",
            validEmail: null
        }
    }

    emailInputHandler = (e) => this.setState({email: e.target.value});
    
    validEmailHandler = () => {
        let {validity: {valueMissing, valid}, value} = this.EmailInput.current;

        if(!valueMissing && valid && value.match(emailRegex) )
            this.setState(
                {validEmail: true},
                () => this.props.emailValue(this.state.email) );
        else 
            this.setState(
                {validEmail: false},
                () => this.props.emailValue("") );
    }
    
    inputRetype = () => this.setState({validEmail: null});
    

    render(){
        let {validEmail, email} = this.state;
        return (
            <div className="form-group">
                <label className="control-label"> Email </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className={ "form-control " + ( validEmail != null ?
                                                    ( validEmail ? "is-valid" : "is-invalid") : "") }
                    value={email}
                    onChange={this.emailInputHandler}
                    onBlur={this.validEmailHandler}
                    onClick={this.inputRetype}
                    ref={this.EmailInput}
                />
                {
                    validEmail ? "" :
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                }
            </div>
        )
    }
}

export default EmailInput;