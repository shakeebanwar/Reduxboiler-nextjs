import { DECREMENT_COUNTER, INCREMENT_COUNTER, auth } from '../actions/counterActions';




const counterReducer = (state = { value: 0, obj: {} }, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, value: state.value + 1 };
        case DECREMENT_COUNTER:
            return { ...state, value: state.value - 1 };

        case auth:
            console.log("auth is call in reducer", action.payload, "type", action.type)
            return { ...state, obj: action.payload };
           



        default:
            return { ...state };
    }
};

export default counterReducer;


