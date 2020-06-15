import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">       
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khóa..."
                        ></input>
                        <span className="input-group-btn">                        
                            <button type="button" className="btn btn-primary">
                            <span className="fa fa-search mr-5">Tìm</span>
                            </button>                    
                        </span>
                    </div>            
                </div>
            </div>
        );
    }
}

export default Search;