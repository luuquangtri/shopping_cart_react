import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
    
}
 
export default ProductList;
