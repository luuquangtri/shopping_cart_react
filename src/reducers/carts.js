import * as Types from '../contants/actionType';
import * as Configs from '../contants/config';
import _ from 'lodash';
const initialState = JSON.parse(localStorage.getItem(Configs.LOCAL_NAME)) || [];

const findIndexProduct = (carts, product) => {
    let total = carts.length;
    for (let i = 0; i < total; i++) {
        if (carts[i].product.id === product.id) {
            return i
        }
    }
    return -1;
}

const cartsReducer = (state = initialState, action) => {
    let { product, quantity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            let vitri = findIndexProduct(state, product);
            if (vitri !== -1) {
                state[vitri].quantity += quantity;
                console.log(state[vitri]);
            } else {
                state.push({
                    product,
                    quantity
                })
            }

            localStorage.setItem(Configs.LOCAL_NAME, JSON.stringify(state))
            return [...state];
        case Types.DELETE_PRODUCT:
            _.remove(state, (item) => {
                return item.product.id === product.id
            })
            localStorage.setItem(Configs.LOCAL_NAME, JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT:
            let vitriUpdate = findIndexProduct(state, product);
            if (vitriUpdate !== -1) {
                state[vitriUpdate].quantity = quantity;
            }
            localStorage.setItem(Configs.LOCAL_NAME, JSON.stringify(state))
            return [...state];
        case Types.CHECK_OUT:
            state = [];
            localStorage.setItem(Configs.LOCAL_NAME, JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default cartsReducer;