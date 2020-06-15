import React, { Component } from 'react';
class Userslist extends Component {
    render() {
        // console.log
        return (
           
            
            <div className="col-lg-12">
                <div className="col-lg-12 x" ><b>Danh sách</b></div>
                <table border="1px" className="table">

                    <thead >
                        <tr >
                            <th>STT</th>
                           
                            <th>Username</th>
                        
                            
                            
                            <th>Số điện thoại</th>
                           
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
           
          
        );
    }
}

export default Userslist;