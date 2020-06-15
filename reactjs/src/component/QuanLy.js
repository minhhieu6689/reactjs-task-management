import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';

var randomstring = require("randomstring");

class QuanLy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: true,
            taskEditing: null
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    generateID() {
        return randomstring.generate(4) + '-' + randomstring.generate(4) + '-' + randomstring.generate(4);
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true 
        });
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id === ''){
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id);
            tasks[index]=data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id) =>{
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task, index)=>{
            if (task.id === id){
                result= index;
            }
        });
        return result;
    }

    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }
    
    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }
    render() {
        var { tasks, isDisplayForm, taskEditing } = this.state; //var tasks=this.state.tasks;
        var elmTaskForm = isDisplayForm ? <TaskForm
                                             onSubmit={this.onSubmit} 
                                             onCloseForm={this.onCloseForm}
                                             task={taskEditing} /> : '';
        return (
            <div className="container">
                <div className="text-container">
                    <h1> Quản lý Công việc </h1> <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {/* Form-ben trai */}
                        {elmTaskForm}
                    </div>

                    {/* Form-ben phải */}
                    <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left ' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}>
                            <span className="fa fa-plus-square mr-55" aria-hidden="true"> </span>  Thêm công việc
                        </button>&nbsp;
                        {/* <button 
                            type="button" 
                            className="btn btn-danger ml-5 "
                            onClick = {this.onGenerateData}>
                             Generate Data 
                        </button> */}
                        {/*Trong Control bao gồm: Search -sort */}
                        <Control />
                        {/*List - Trong TaskList bao gồm: TaskItemt*/}
                        <TaskList 
                            tasks={tasks} 
                            onUpdateStatus={this.onUpdateStatus}
                            onDelete={this.onDelete}
                            onUpdate={this.onUpdate}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuanLy;















