import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name : '',
            status: false,
        }
    }

    componentWillMount(){
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
            
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        }else if(!nextProps.task){
            this.setState({
                id: '',
            name : '',
            status: false
            });
        }
    }
    
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        //cancel & close form
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name:'',
            status:false
        });
    }
    
    render() {
        var {id} = this.state;
        return (
            <div >
                {/* Form-ben trái */}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title mr-5">
                        { id !== '' ? 'Cập nhật công việc' : 'Thêm công việc' }
                                <span
                                className="fa fa-times-circle "
                                onClick={this.onCloseForm}>  </span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form >
                            <div className="form-group text-left">
                                <label  >Tên: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name" 
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    />
                            </div>
                            <div className="form-group text-left">
                                <label >Trạng thái: </label>
                                <select
                                    className="form-control"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}>
                                    <option value={true}>Kích hoạt</option>
                                    <option value={false}>Ẩn</option>
                                </select><br />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success" onClick={this.onSubmit}>
                                    <span className="fa fa-arrow-circle-down" aria-hidden="true"> Lưu lại </span>
                                </button>&nbsp;
                                    <button type="submit" className="btn btn-danger" onClick={this.onClear}>
                                    <span 
                                        className="fa fa-ban"  
                                        aria-hidden="true"
                                        > Hủy bỏ </span>
                                </button>&nbsp;
                                </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default TaskForm;















