import React, { Component } from 'react';
import PrivateRoute from './component/Privateroute'
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Login from './component/Login'
import Menu from './component/Menu';
import routes from './route';
import Auth from './Auth';
class App extends Component {
    componentDidMount () {
        
    }
    render() {
        if(localStorage.getItem('username') != 'admin' || localStorage.getItem('password')!= '123')
         Auth.logout()
        else  Auth.login()
        return (
            <Router>
                
                <div className="App">
                    <Menu />
                    <Route path='/Login' component={Login}/>
                    <Switch>
                    {this.showMenuRoutes(routes)}
                    </Switch>
                        

                </div>
            </Router>
        );
    }
    showMenuRoutes = (routes) => {
        var result = null ;
        if (routes.length > 0)
        {
            result = routes.map((route, index) => {
                return (
                    <PrivateRoute 
                        key= {index}
                        path = {route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            })
        }
        return result;
    }
}


export default App;

