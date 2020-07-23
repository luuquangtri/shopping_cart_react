import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCart, actChangeMessage } from '../actions/index';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';


class ProductContainer extends Component {
    render() {
        let { products } = this.props
        return (
            <ProductList>
                {this.renderProductItem(products)}
            </ProductList>
        );
    }

    renderProductItem = (products) => {
        let el = null;
        let { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            el = products.map((product, index) => {
                return <ProductItem index={index} key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            })
        }
        return el;
    }
}

ProductContainer.propsTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (content) => {
            dispatch(actChangeMessage(content));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
