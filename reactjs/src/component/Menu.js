import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Giới thiệu',
        to: '/About',
        exact: false,
    },
    {
        name: 'Liên hệ',
        to: '/Contact',
        exact: false,
    },
    {
        name: 'Người dùng',
        to: '/Userspage',
        exact: false,
    },
    
    {
        name: 'Quản lý CV',
        to: '/QuanLy',
        exact: false,
    },
    {
        name: '',
        to: '/NotFound',
        exact: false,
    },
    {
        name: 'Đăng Nhâp',
        to: '/Login',
        exact: false,
    }
]
const MenuLink = ({
    label, // nội dung trong thẻ
    to, // giống như href trong thẻ a
    activeOnlyWhenExact
}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link to={to} className="my-link">{label}</Link>
                    </li>
                );
            }}
        />
    );
}
class Menu extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {

            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}>
                    </MenuLink>
                )
            });
        }
        return result;
    }
}

export default Menu;