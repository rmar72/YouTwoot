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

    handlePasswordChange = (e) =>{
        console.log(e.target.value)
        this.setState({password: e.target.value})
        let {patternMismatch, valid} = this.PasswordRef.current.validity;
    }

    render(){
        return(
            <div className="form-group">
                <label className="control-label">Password</label>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}></input>
                    ref={this.PasswordRef}
            </div>
        )
    }

}

export default PasswordInput;