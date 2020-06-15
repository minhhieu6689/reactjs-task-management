import React, { Component } from 'react';
import { Switch, Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import fakeAuth from '../Auth'
import Login from './Login'
const Privateroute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                console.log(fakeAuth.authenticated)
                var x = fakeAuth.isAuthenticated()
                if (x === true)
                   
                    return <Component {...props} />

                return  <Redirect to='/Login'/>
                


            }}
        />

    )
}




export default Privateroute