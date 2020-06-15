import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* Form-ben trái */}
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center"> Thêm công việc
                                    <span className="fa fa-check-circle" ></span>
                                </h3>
                            </div>
                        </div>
                        <div className="panel-body">
                            <form >
                                <div className="form-group text-left">
                                    <label  >Tên: </label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="form-group text-left">
                                    <label >Trạng thái: </label>
                                    <select
                                        className="form-control"
                                        value = {false}
                                        name="status">
                                        <option value={true}>Kích hoạt</option>
                                        <option value={false}>Ẩn</option>
                                    </select><br />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">
                                        <span className="fa fa-arrow-circle-down" aria-hidden="true"> Lưu lại </span>
                                    </button>&nbsp;
                                    <button type="submit" className="btn btn-danger">
                                        <span className="fa fa-times" aria-hidden="true"> Hủy bỏ </span>
                                    </button>&nbsp;
                                </div>
                            </form>
                        </div>
                    </div>
        );
    }
}

export default TaskForm;















