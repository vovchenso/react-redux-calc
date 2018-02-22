import * as Actions from '../../constants/actions';


const initialState = {
    temp: '',
    value: '0',
    operation: '',
    result: ''
};

export default function calc(state = initialState, action) {

    switch(action.type) {

        case Actions.CLEAR:
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
                result: state.result.concat(action.value)
            };

        default:
            return state;
    }

};