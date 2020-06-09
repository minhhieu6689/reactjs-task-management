import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from './../Auth'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        var { history } = this.props
        var {txtUsername, txtPassword} = this.state;

        if (txtUsername === 'admin' && txtPassword === '123') {
            localStorage.setItem('username', 'admin'
            );
            localStorage.setItem('password', '123')
            Auth.login()
            history.push("/")
            return 
        }
        else 
        {
            alert('Đăng nhập sai')
            return history.push("/Login")}
    }
    logout = () => {
         
            
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            Auth.logout();
            return window.location.reload()
    }
    render() {
        if(Auth.isAuthenticated() === true)
        {
            return (
                <div>
                   <button onClick={this.logout} className="my-link">Dang xuat</button>
                </div>
            )
        }
       
        else
        return (
            
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3">
                    
                    <form onSubmit={ this.onLogin }>
                        <legend>Dang Nhap</legend>
                    
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtUsername" 
                                value={this.state.txtUsername}
                                onChange={ this.onChange }
                            />
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="txtPassword" 
                                value={this.state.txtPassword}
                                onChange={ this.onChange }
                            />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Dang Nhap</button>
                    </form>
                    
                </div>
            </div>
            
        );
    }
}

export default Login;