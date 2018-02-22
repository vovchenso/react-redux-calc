import * as Actions from '../../constants/actions';


const initialState = {
    temp: '',
    value: '0',
    operation: '',
    result: ''
};

export default function calc(state = initialState, action) {

    switch(action.type) {

        case Actions.RESET:
            return initialState;

        case Actions.EVAL:
            return {
                value: eval(state.result),
                result: ''
            };

        case Actions.DIGIT:
        case Actions.OPERATION:
            return {
                ...state,
                value: state.value.concat(action.value),
                result: state.result.concat(action.value)
            };

        default:
            return state;
    }

};