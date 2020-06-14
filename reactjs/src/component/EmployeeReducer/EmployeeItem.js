import React, { Component } from 'react';
import { openUpdateEmployeeForm, deleteEmployee } from '../../actions/employeeAction'
import { connect } from 'react-redux';
class EmployeeItem extends Component {
    updateEmployee = (id) =>{
        this.props.openUpdateEmployeeForm(id)
    }

    deleteEmployee = (id) =>{
        this.props.deleteEmployee(id)
    }
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.index}</td>
                <td className="text-center">{this.props.id}</td>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.props.email}</td>
                <td className="text-center">{this.props.phone}</td>
                <td className="text-center" index={this.props.index} style={{width:'200px'}}>
                    <button data-index={this.props.index} type="button" className="btn btn-warning" onClick={() => this.updateEmployee(this.props.id)}>
                        <span className="fa fa-pencil mr-5" aria-hidden="true"></span>
                            Sửa
                    </button> &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.deleteEmployee(this.props.id)}>
                        <span className="fa fa-trash mr-5" aria-hidden="true"></span>
                            Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
function mapStateToProps(state) {
    return {
        employees: state.employee.employees,
        isOpenForm: state.employee.isOpenEmployeeForm
    };
}

export default connect(
    mapStateToProps, {openUpdateEmployeeForm, deleteEmployee }
)(EmployeeItem);















