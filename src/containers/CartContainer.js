import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../contants/message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProduct, actChangeMessage, actUpdateProduct, actCheckOut } from '../actions/index';
class CartContainer extends Component {
    render() {
        let { carts } = this.props;
        return (
            <Cart>
                {this.showCartItem(carts)}
                {this.showCartResult(carts)}
            </Cart>
        );
    }
    showCartItem = (carts) => {
        let el = <h3>{Message.MSG_CART_EMPTY}</h3>;
        let { onDelete, onChangeMessage, onUpdate } = this.props;
        if (carts.length > 0) {
            el = carts.map((item, index) => {
                return <CartItem
                    key={index + "-" + item.quantity}
                    index={index} item={item}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onChangeMessage={onChangeMessage}
                />
            })
        }
        return el;
    }
    showCartResult = (carts) => {
        let el = null;
        let { checkOut, onChangeMessage } = this.props;
        if (carts.length > 0) {
            el = <CartResult checkOut={checkOut} onChangeMessage={onChangeMessage} carts={carts} />
        }
        return el;
    }
}

CartContainer.propsTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}
const mapDispathToProps = (dispatch, ownProps) => {
    return {
        onDelete: (product) => {
            dispatch(actDeleteProduct(product))
        },
        onChangeMessage: (content) => {
            dispatch(actChangeMessage(content));
        },
        onUpdate: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        },
        checkOut: () => {
            dispatch(actCheckOut());
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(CartContainer);
