import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',

            status: 0,
            color: ""
        }
    }
    componentDidMount() {
        var { user } = this.props
       
    }
    onDelete = (username) => {
        if (confirm('Bạn chắc chắn muốn xóa ???')) { //eslint-disable-line

            this.props.onDelete(username)
        }
    }
    detail = (username) => {
        this.props.detail(username)
    }
    resetpass = (username) => {
        this.props.resetpass(username)
    }
    onEdit = (x) => {
        this.props.onEdit(x)
    }
    render() {
        var { user, index } = this.props
       
        return (
            <tr className>
                <td >{index + 1}</td>

                <td>{user.name}</td>
                
             
                <td>{user.sdt}</td>
               

                
                {/* <td className={"alert-" + this.state.color} >{this.state.status}</td> */}

                <td className="luan-button" >
                    
                    
                    {/* <Link to={"/payment/" + user._id}
                        type="button" className=" btn btn-success">Lịch sử nạp tiền</Link>
                    <button type="button" onClick={() => this.resetpass(user.username)} className="btn btn-secondary">Đặt lại mật khẩu</button>
                    <button type="button" onClick={() => this.detail(user.username)} className="btn btn-info">Chi tiết</button> */}
                    <button type="button" onClick={() => this.onEdit(user.name)} className="btn btn-warning">Sửa</button>
                    <button type="button" onClick={() => this.onDelete(user.id)} className="btn btn-danger">Xóa</button>


                </td>
            </tr>
        );
    }
}

export default User;