import React, { Component } from 'react';
import { callApi } from './../utils/CallAPI'
import { Link } from 'react-router-dom'
import axios from 'axios'
class UserActionpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Thêm người dùng",
          
            txtname: '',
            txtsdt: '',
            txtmk: ''
        }
    }


    onChange = (event) => {

        var target = event.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({
                title: "Cập nhật người dùng"
            })
            axios.get('/users/' + this.props.match.params.id).then(res => {
                if (res.data.result == "OK")
                    console.log(res.data)
                    this.setState({
                        txtname: res.data.user.name,
                        txtmk: res.data.user.mk,
                        txtsdt: res.data.user.sdt,
                    })
                    return 
            }
        )

        }
        return console.log("no")
    }
    onEdit = (id) => {

    }
    onSave = (event) => {
        event.preventDefault()
        var {  txtname, txtsdt, txtmk } = this.state
        var { history } = this.props
        if(this.state.txtname.length<4)
        return alert("Tên tài khoản phải ít nhát 4 kí tự")
        if(this.state.txtmk.length<5)
        return alert("Mật khẩu phải ít nhát 5 kí tự")
        if(this.state.txtsdt.length<10)
        return alert("Số điện thoại phải ít nhát 10 kí tự")
        if(!this.props.match.params.id)
        {
            axios.post('/users/create', {

                mk: txtmk,
                sdt: txtsdt,
                name: txtname
    
            }).then(res => {
                console.log(res)
                alert('Thêm thành công')
                return history.push("/Userspage")
            })
        }
        else {
            
            axios.put('/users/update/'+this.props.match.params.id, {

                mk: txtmk,
                sdt: txtsdt,
                name: txtname
    
            }).then(res => {
              
                if(res.data.result == "OK")
                {
                     alert("Cập nhật thành công")
                    return window.location.reload()
                    
                }
               
                else {
                     alert(res.data.error)
                     return window.location.reload()
                     
                }
            })
        }
        
    }

    render() {  
        var { txtname, txtsdt, txtmk, title } = this.state
        return (
            <div className="col-lg-6">
                <form onSubmit={this.onSave}>
                    <h3>{title}</h3>
                    <div className="luan-label form-group">
                        <label for=""><b>Tên người dùng</b></label>
                        <input type="text"
                            className="luan-label form-control"
                            name={(this.props.match.params.id) ? "" : "txtname"}
                            value={txtname}
                            onChange={this.onChange} />

                    </div>
                    <div className="luan-label form-group">
                        <label for=""><b>Mật khẩu</b></label>
                        <input type="password"
                            className="luan-label form-control"
                            name="txtmk"
                            value={txtmk}
                            onChange={this.onChange} />

                    </div>
                    <div className="luan-label form-group">
                        <label for=""><b>SDT</b></label>
                        <input type="number"
                            className="luan-label form-control"
                            name="txtsdt"
                            value={txtsdt}
                            onChange={this.onChange} />

                    </div>
                    <div className="luan-label form-group">
                        <Link to="/Userspage" type="submit" className="btn btn-danger mr-10 ">Trở lại</Link>
                        <button type="submit" className="btn btn-primary danger">Lưu lại</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default UserActionpage;