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
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ???')) { //eslint-disable-line

            this.props.onDelete(id)
        }
    }
    onDetail = (id) => {
        this.props.onDetail(id)
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
                     <Link type="button"  className="btn btn-warning" to={'/Userspage/add/'+user.id} > Sửa </Link>
                    {/* <button type="button" onClick={() => this.onDetail(user.id)} className="btn btn-warning">Sửa</button> */}
                    <button type="button" onClick={() => this.onDelete(user.id)} className="btn btn-danger">Xóa</button>


                </td>
            </tr>
        );
    }
}

export default User;