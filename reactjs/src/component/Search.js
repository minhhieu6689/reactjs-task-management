import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
<div>
            {/*Search*/ }
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ paddingTop: 20 }}>
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control"
                            placeholder="nhập từ khóa.." />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary">
                                <span className="fa fa-search" aria-hidden="true">Tìm</span>
                            </button>
                        </span>
                    </div>
                </div>
              </div> 
        );
    }
}

export default Search;















