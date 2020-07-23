import React, { Component } from 'react';
import Deposit from '../Helper/deposit';
import * as Message from '../contants/message';
class CartItem extends Component {

    onDelete = (product) => {
        this.props.onDelete(product);
        this.props.onChangeMessage(Message.MSG_DELETE_CART);
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdate(product, quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART);
        }

    }
    render() {
        let { item } = this.props;
        let { product } = item;
        let { quantity } = item;
        // console.log("aa", item);

        return (
            <tr >
                <th scope="row" className="text-center">
                    <img src={product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h3>
                        <strong>{product.name}</strong>
                    </h3>
                </td>
                <td>{Deposit.toCurrency(product.price, "$")}</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateQuantity(product, quantity - 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href="# " >—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(product, quantity + 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a href="# ">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subtotal(product.price, quantity)}</td>
                <td>
                    <button onClick={() => this.onDelete(product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                                    </button>
                </td>
            </tr>
        );
    }
    subtotal = (price, quantity) => {
        return Deposit.toCurrency(price * quantity, "$")
    }
}

export default CartItem;
