import React, { Component } from 'react';
import * as Message from '../contants/message';
import Deposit from '../Helper/deposit';
class ProductItem extends Component {
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART);
    }
    render() {
        let { product } = this.props;

        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href="# ">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="# ">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.rating(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <div className="card-footer">
                            <span className="left">{Deposit.toCurrency(product.price, "$")} x{product.inventory}</span>
                            {this.inventory(product)}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    rating = (rating) => {
        let result = [];
        if (rating > 0) {
            for (let i = 1; i <= rating; i++) {
                result.push(<i key={i} className="fa fa-star"></i>)
            }
            for (let j = 1; j <= (5 - rating); j++) {
                result.push(<i key={j + 100} className="fa fa-star-o"></i>)
            }
        }
        return <li>{result}</li>
    }
    inventory = (product) => {
        let el = null;
        if (product.inventory > 0) {
            el = <span className="right">
                <a
                    onClick={() => this.onAddToCart(product)}
                    href="# "
                    className="btn-floating blue-gradient"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Add to Cart">
                    <i className="fa fa-shopping-cart"></i>
                </a>
            </span>
        } else {
            el = <span className="btn btn-danger p-2">Sold out</span>
        }
        return el;
    }
}

export default ProductItem;
