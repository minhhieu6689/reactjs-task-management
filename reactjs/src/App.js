import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Menu from './component/Menu';
import routes from './route';
class App extends Component {
    render() {
       
        return (
            <Router>
                <div className="App">
                    <Menu />
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
                    <Route 
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

