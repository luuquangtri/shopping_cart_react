import React, { Component } from 'react';
import * as Message from '../contants/message';
import _ from 'lodash';
class CartResult extends Component {
    checkOut=()=>{
        this.props.checkOut();
        this.props.onChangeMessage(Message.MSG_CHECKOUT);
    }
    render() {
        let { carts } = this.props
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        {this.totalAmount(carts)}
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.checkOut}>Complete purchase
                                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    totalAmount = (carts) => {
        let totalPrice = null;
        if (carts.length > 0) {
            totalPrice = _.sumBy(carts, (item) => {
                return item.product.price * item.quantity
            })
        }
        return totalPrice
    }
}

export default CartResult;
