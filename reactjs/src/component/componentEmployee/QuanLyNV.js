import React, { Component } from 'react';
import './App.css';
import TaskForm from './TaskForm'
import Control from './Control'

import TaskList from './TaskList'
class QuanLyNV extends Component {
    render() {
        return (
            <div className="container"> 
              <div className="text-center">
                <h1>QUẢN LÝ NHÂN VIÊN</h1><hr/>
              </div>
              <div className="row">                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* Form */}  
                  <TaskForm />              
                </div>                
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">                             
                  <button type="button" className="btn btn-primary">                                      
                  <span className="fa fa-plus mr-5"></span>Thêm nhân viên
                  </button>                                      
                      
                  {/* Search - Sort */}
                  <Control />            
                      
                  {/* List */}
                  <TaskList />
                </div>                  
              </div>               
                
            </div>
                
            
        );
    }
}

export default QuanLyNV;