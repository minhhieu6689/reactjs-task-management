import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,

                name: 'Iphone1',
                price: 100, slug: 'Iphone11',
            },
            {
                id: 2,
                slug: 'Iphone21',
                name: 'Iphone2',
                price: 200
            },
            {
                id: 3,
                slug: 'Iphone31',
                name: 'Iphone3',
                price: 300
            }
        ]

        var { match } = this.props;
        var url = match.url;
        console.log(match);

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })

        var location = this.props;
        console.log(location);
        return (
            <div className="container">
                <h1>DANH SÁCH CÁC SẢN PHẨM</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
               
            </div>
        );
    }
}

export default Products;




