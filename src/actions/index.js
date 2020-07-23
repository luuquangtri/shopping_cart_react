import * as Types from '../contants/actionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (content) => {
    return {
        type: Types.CHANGE_MESSAGE,
        content
    }
}

export const actDeleteProduct = (product) => {
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product,
        quantity
    }
}

export const actCheckOut = () => {
    return {
        type: Types.CHECK_OUT,
    }
}