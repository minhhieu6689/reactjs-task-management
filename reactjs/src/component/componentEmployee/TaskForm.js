import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          Thêm nhân viên
                          <span className="fa fa-time-cirle text-right">
                          </span>
                        </h3>
                      </div>
                      
                    <div className="panel-body">
                      <form>
                        <div className="form-group text-left">
                          <label>Tên: </label>
                          <input
                          type="text"
                          className="form-control"
                          name="name"
                          ></input><br/>                          
                       
                        <label>Trạng thái: </label>
                        <select
                          className="form-control"
                          name="status"
                        >
                          <option value={true}>Kích hoạt</option>
                          <option value={false}>Ẩn</option>
                        </select>
                        </div>
                        <div className="text-center">                        
                          <button type="submit" className="btn btn-warning">  
                            <span className="fa fa-plus mr-5"></span>Lưu lại
                          </button>&nbsp;                   
                          <button type="submit" className="btn btn-danger">
                            <span className="fa fa-close mr-5"></span>Hủy bỏ
                          </button>                
                        </div>
                      </form>                       
                    </div>
                 
                  </div>  
            </div>
        );
    }
}

export default TaskForm;