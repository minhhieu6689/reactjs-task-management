import React, { Component } from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Userspage from './component/Userspage';
import UserActionpage from './component/UserActionpage';
import APIWeather from './component/APIweather/Index'
import Login from './component/Login';
import QuanLy from './component/QuanLy';
import NotFound from './component/NotFound';

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
        path: '/Userspage/add/:id',
        exact: false,
        main: ({match, history}) =><UserActionpage match={match} history={history} />
    },
    {
        path: '/Userspage/add',
        exact: false,
        main: ({match, history}) =><UserActionpage match={match} history={history} />
    },
    {
        path: '/Userspage',
        exact: false,
        main: ({match, location}) =><Userspage match={match} location={location} />
    },
    {
        path: '/Apiweather',
        exact: false,
        main: ({match, location}) =><APIWeather match={match} location={location} />
    },
    // {
    //     path: '/Login',
    //     exact: false,
    //     main : ({history,match}) => <Login match={match} history={history}/>
    // },
    {
        path: '/QuanLy',
        exact: false,
        main : () => <QuanLy/>
    },
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound/>
    // }
]

export default routes;