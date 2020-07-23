import * as Types from '../contants/actionType';
import * as Configs from '../contants/config';
import _products from '../api/products.json';
const initialState = _products;

const checkInvetory = (products, product) => {
    let total = products.length;
    for (let i = 0; i < total; i++) {
        if (products[i].id === product.id) {
            return i;
        }
    }
    return -1
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            let vitriCapNhatInventory = checkInvetory(state, action.product);
            if (vitriCapNhatInventory !== -1) {
                state[vitriCapNhatInventory].inventory = action.product.inventory - 1;
            }
            localStorage.setItem(Configs.LOCAL_INVENTORY, JSON.stringify(state));
            return [...state];
        default:
            return state
    }
}

export default productsReducer;