import { combineReducers } from 'redux';
import productsReducer from './products';
import cartsReducer from './carts';
import messageReducer from './message';
const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartsReducer,
    message: messageReducer
})

export default rootReducer;