import axios from 'axios'
import * as Config from './../consts/Config'
import proxy from './../../package.json'
import React, { Component } from 'react';
export const  callApi = (target, method ='GET', body) =>{
    return (
        axios ({
            method: method,
            url: Config.API_URL+target,
            data: body
        }).catch(err=>{ 
            console.log(err)
        })   
    )
}
