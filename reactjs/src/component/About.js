import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h3>Đây là trang Giới thiệu</h3>
                <Prompt
                    when={true} // true | false
                    message={(location) => (`Ban chac chan muon di den ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default About;