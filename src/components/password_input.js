import React, {Component} from 'react';

class PasswordInput extends Component{
    constructor(props){
        super(props);
        this.PasswordRef = React.createRef();

        this.state = {
            password: '',
            validPassword: null
        }
    }

    passwordInputHandler = (e) =>{
        this.setState({password: e.target.value});

        this.validPasswordHandler();

        if(!e.target.value)
            this.setState({validPassword: false});
    }

    validPasswordHandler = () =>{
        let {patternMismatch, valid} = this.PasswordRef.current.validity;

        if(!patternMismatch && valid)
            this.setState({validPassword: true});
        else 
            this.setState({validPassword: false});   
    }

    render(){
        let {validPassword} = this.state;
        return(
            <div className="form-group">
                <label className="control-label">Password</label>
                <input 
                    type="password"
                    name="password"
                    className={ 'form-control ' + ( validPassword != null ?
                                                    ( validPassword ? "is-valid" : "is-invalid") : '') }
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={this.state.password}
                    onChange={this.passwordInputHandler}
                    ref={this.PasswordRef}
                />
                {
                    validPassword ? '' : 
                        <div className="invalid-feedback">
                            Password must contain a minimum of 8 characters, a lowercase letter, an uppercase letter and a number.
                        </div>
                }
            </div>
        )
    }

}

export default PasswordInput;