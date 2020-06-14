import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllEmployee} from '../../actions/employeeAction'

class EmployeeForm extends Component {

    componentDidMount(){
        this.props.getAllEmployee()
    }

    componentDidUpdate(){
        console.log(this.props.employees)
    }

    render() {
        return (
            <div>
                <h1>Employee</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employee.employees
    };
}

export default connect(
    mapStateToProps, {getAllEmployee}
)(EmployeeForm);