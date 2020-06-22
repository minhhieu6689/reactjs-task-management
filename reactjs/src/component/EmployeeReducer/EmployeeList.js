import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem'
import { connect } from 'react-redux';
import {getAllEmployee} from '../../actions/employeeAction'

class EmployeeList extends Component {
    componentDidMount(){
        this.props.getAllEmployee()
    }

    render() {
        const employeeItem = this.props.employees.map( (item,index)=>{
            return<EmployeeItem key={index} index={index} id={item.id} name={item.name} email={item.email} phone ={item.phone} />
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingTop: 10 }}>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Mã nhân viên</th>
                                <th className="text-center">Họ và Tên</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Số điện thoại</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeItem}
                            
                        </tbody>
                    </table>
                </div>
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
)(EmployeeList);