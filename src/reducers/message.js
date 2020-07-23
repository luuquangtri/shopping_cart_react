import * as Types from '../contants/actionType';
import * as Message from '../contants/message';
const initialState = Message.MSG_WELCOME;

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.content;
        default:
            return state;
    }
}

export default MessageReducer;