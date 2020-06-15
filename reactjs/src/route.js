import React, { Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import Login from './component/Login';
import QuanLy from './component/QuanLy';
import NotFound from './component/NotFound';
import QuanLyNV from './component/componentEmployee/QuanLyNV'
import EmployeeReducer from './component/EmployeeReducer/Employee'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/About',
        exact: false,
        main: () => <About />
    },
    {
        path: '/Contact',
        exact: false,
        main: () => <Contact/>
    },
    {
        path: '/Products',
        exact: false,
        main: ({match, location}) =><Products match={match} location={location} />
    },
    {
        path: '/Login',
        exact: false,
        main : ({location}) => <Login location={location}/>
    },
    {
        path: '/QuanLy',
        exact: false,
        main : () => <QuanLy/>
    },
    {
        path: '/QuanLyNV',
        exact: false,
        main : () => <QuanLyNV/>
    },
    {
        path: '/Employee-Redux',
        exact: false,
        main : () => <EmployeeReducer/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
    
]

export default routes;