import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAddEmployeeForm, addEmployee, updateEmployee } from '../../actions/employeeAction'
class EmployeeForm extends Component {
    state = {
        id: parseInt(Math.random()*1000),
        name: '',
        email: '',
        phone: '',
    }

    componentDidMount(prevProps, prevState) {
        let entity = this.props.employee
        if (entity && this.props.typeForm === 'EDIT') {
            this.setState({
                id: entity.id,
                name: entity.name,
                email: entity.email,
                phone: entity.phone,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.employee !== prevProps.employee) {
            let entity = this.props.employee
            this.setState({
                id: entity.id,
                name: entity.name,
                email: entity.email,
                phone: entity.phone,
            })
        }
    }

    handleSetStateEmpty = () => {
        this.setState({
            id: parseInt(Math.random()*1000),
            name: '',
            email: '',
            phone: '',
        })
    }

    closeEmployeeForm = (e) => {
        this.handleSetStateEmpty()
        this.props.openAddEmployeeForm(false)
    }

    handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked,
            })
        } else if (e.target.name === 'id') {
            this.setState({
                [e.target.name]: e.target.value.replace(/\s/g, ''),
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.typeForm === 'ADD') {
            this.props.addEmployee(this.state)
            this.handleSetStateEmpty()
        }
        else if (this.props.typeForm === 'EDIT') {
            this.props.updateEmployee(this.state)
        }

    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {/* Form-ben trái */}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center"> Form nhân viên
                                    <span className="fa fa-check-circle" ></span>
                        </h3>
                    </div>
                </div>
                <div className="panel-body">
                    <form >
                        <div className="form-group text-left">
                            <label>Mã NV: </label>
                            <input type="number" value={this.state.id} className="form-control" name="" readOnly={this.props.typeForm === 'EDIT'} onChange={this.handleChange} />
                        </div>
                        <div className="form-group text-left">
                            <label  >Tên: </label>
                            <input type="text" value={this.state.name} className="form-control" name="name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group text-left">
                            <label  >Email: </label>
                            <input type="text" value={this.state.email} className="form-control" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group text-left">
                            <label  >SĐT: </label>
                            <input type="text" value={this.state.phone} className="form-control" name="phone" onChange={this.handleChange} />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>
                                <span className="fa fa-arrow-circle-down" aria-hidden="true"> Lưu lại </span>
                            </button>&nbsp;
                                    <button type="submit" className="btn btn-danger">
                                <span className="fa fa-times" aria-hidden="true" onClick={this.closeEmployeeForm}> Hủy bỏ </span>
                            </button>&nbsp;
                                </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        typeForm: state.employee.typeFormEmployee,
        employee: state.employee.employee
    };
}

export default connect(
    mapStateToProps, { openAddEmployeeForm, addEmployee, updateEmployee }
)(EmployeeForm);















