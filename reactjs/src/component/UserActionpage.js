import React, { Component } from 'react';
import {callApi} from './../utils/CallAPI'
import {Link} from 'react-router-dom'
import axios from 'axios'
class UserActionpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtname: '',
            txtsdt: '',
            txtmk: ''
        }
    }


onChange = (event) => {
   
    var target=event.target
    var name=target.name
    var value = target.type ==='checkbox' ? target.checked : target.value
    this.setState ({
        [name]:value
    })
}
onSave = (event) =>{
    event.preventDefault()
    var {id,txtname,txtsdt,txtmk} = this.state
    var {history}  =this.props
    
    axios.post('/users/create',{
        
        mk: txtmk,
        sdt: txtsdt,
        name : txtname 
        
    }).then(res=>{
        console.log(res) 
        alert('Thêm thành công')
        return history.push("/Userspage")})
}

    render() {
        var { txtname, txtsdt, txtmk } = this.state
        return (
            <div className="col-lg-6">
                <form onSubmit={this.onSave}>
                    <h3>Thêm người dùng</h3>
                    <div className="luan-label form-group">
                        <label for=""><b>Tên người dùng</b></label>
                        <input type="text"
                            className="luan-label form-control"
                            name="txtname"
                            value={txtname}
                            onChange={this.onChange} />

                    </div>
                    <div className="luan-label form-group">
                        <label for=""><b>Mật khẩu</b></label>
                        <input type="password"
                            className="luan-label form-control" 
                            name="txtmk" 
                            value={txtmk}
                            onChange={this.onChange}/>

                    </div>
                    <div className="luan-label form-group">
                        <label for=""><b>SDT</b></label>
                        <input type="text"
                            className="luan-label form-control"
                            name="txtsdt"
                            value={txtsdt}
                            onChange={this.onChange} />

                    </div>
                    <div className="luan-label form-group">
                        <Link to="/products-list" type="submit" className="btn btn-danger mr-10 ">Trở lại</Link>
                        <button type="submit" className="btn btn-primary danger">Lưu lại</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default UserActionpage;