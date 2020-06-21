import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllEmployee, openAddEmployeeForm } from '../../actions/employeeAction'
import EmployeeForm from './EmployeeForm';
import Control from '../Control';
import EmployeeList from './EmployeeList';

class Employee extends Component {

    openEmployeeForm = () => {
        this.props.openAddEmployeeForm(true)        
    }

    render() {
        return (
            <div className="container">
                <div className="text-container">
                    <h1> Quản lý nhân viên </h1> <hr />
                </div>
                <div className="row">
                    {
                        (() => {
                            if (this.props.isOpenForm == true)
                                return (
                                    <EmployeeForm />
                                )
                        })()
                    }
                    {/* Form-ben phải */}
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                        <button type="button" className="btn btn-primary " onClick={this.openEmployeeForm}>
                            <span className="fa fa-plus-square" aria-hidden="true"> Thêm nhân viên </span>
                        </button>&nbsp;
                            {/*Trong Control bao gồm: Search -sort */}
                        {/* <Control /> */}
                        {/*List - Trong TaskList bao gồm: TaskItemt*/}
                        <EmployeeList />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employee.employees,
        isOpenForm: state.employee.isOpenEmployeeForm,
        employee: null
    };
}

export default connect(
    mapStateToProps, { getAllEmployee, openAddEmployeeForm }
)(Employee);