import React, { Component } from 'react';


class Sort extends Component {
    render() {
        return (
            <div>
                {/*sort */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{ paddingTop: 20 }}>
                    <div className="dropdown">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        > Sắp xếp <span className="fa fa-sort ml-5" aria-hidden="true"></span>
                        </button> {/*aria-labeledby="dropdownMenu1" */}
                        <ul className="dropdown-menu" >
                            <li>
                                <a role="button" className="sort-selected">
                                    <span className="fa fa-sort-alpha-asc pr-5" aria-hidden="true"> Tên A - Z</span>
                                </a>
                            </li>
                            <li>
                                <a role="button" >
                                    <span className="fa fa-sort-alpha-desc" aria-hidden="true"> Tên Z - A</span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a role="button"> Trạng thái kích hoạt </a>
                            </li>
                            <li>
                                <a role="button"> Trạng thái ẩn </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;















