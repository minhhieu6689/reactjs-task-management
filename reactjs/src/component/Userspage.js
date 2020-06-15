import React, { Component } from 'react';
import User from './User'
import Auth from '../Auth'
import {callApi} from '../utils/CallAPI'
import { Link, Redirect } from 'react-router-dom'
import Userslist from './Userslist'
import axios from 'axios'
import {API_URL} from '../consts/Config'
class Userspage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }

    }
    onDelete = (id) => {
       
        var { users } = this.state
        axios.delete('users/delete/' + id
        ).then(res => {
            if (res.status === 200) {
                var index = this.findindex(users, id)
                if (index !== -1) {
                    users.splice(index, 1)
                    this.setState({
                        users: users
                    })
                }
            }
        })
    }
    findindex = (users, id) => {
        var rs = -1
        users.map((user, index) => {
            if (user.id === id) {
                rs = index
            }
        })
        return rs
    }
    componentDidMount() {
        axios.get('users').then(res => {
           
                this.setState({
                users: res.data.users,
                result: res.data.result
            })         
        }) 
    }


    render() {
        var result = this.state.result
      
        var { users } = this.state
        
        return (
            <div >
                <div className="row">
                    <div className="col-lg-4 ">
                        <Link to="/Userspage/add" type="button" className="btn btn-primary" > Thêm người dùng</Link>
                    </div>
                    <div className="col-lg-4" text-align="left">
                        <h3 >Quản lý người dùng</h3>
                    </div>

                </div>
                <Userslist>
                    {this.showUsers(users)}
                </Userslist>
            </div>
        );
    }
   
    showUsers = (x) => {

        var rs = null;
        if (x.length > 0) {
           
            rs = x.map((user, index) => {
                return (
                    <User
                        key={index}
                        user={user}
                        index={index}
                        onDelete={this.onDelete}
                       
                    />
                )
            })
        }

        return rs;
    }
}

export default Userspage;