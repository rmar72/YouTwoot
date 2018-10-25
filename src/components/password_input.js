import React, {Component} from 'react';

class PasswordInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            password: '',
            validPassword: null
        }
    }

    handlePasswordChange = (e) =>{
        console.log(e.target.value)
        this.setState({password: e.target.value})
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
            </div>
        )
    }

}

export default PasswordInput;