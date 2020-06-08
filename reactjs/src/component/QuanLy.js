import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';

class QuanLy extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-container">
                    <h1> Quản lý Công việc </h1> <hr />
                </div>
                <div className="row">
                    <TaskForm/>
                    {/* Form-ben phải */}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                        <button type="button" className="btn btn-primary ">
                            <span className="fa fa-plus-square" aria-hidden="true"> Thêm công việc </span>
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger ">
                             Generate Data 
                        </button>&nbsp;
                            {/*Trong Control bao gồm: Search -sort */}
                            <Control/>
                            {/*List - Trong TaskList bao gồm: TaskItemt*/}
                            <TaskList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuanLy;















