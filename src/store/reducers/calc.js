import * as Actions from '../../constants/actions';
import * as Operations from '../../constants/operations';
import * as Validator from '../utils/validators';


const initialState = {
    temp: null,
    value: 0,
    operation: ''
};

const calculate = (origin, operation, value) => {
    value = +value;
    origin = +origin;

    switch (operation) {
        case Operations.PLUS:
            return origin + value;
        case Operations.MINUS:
            return origin - value;
        default:
            return '';
    }
};

const setDigit = (state, value) => {
    if (Validator.isValidDigit(value)) {
        return {
            ...state,
            value: state.value ? +state.value.toString().concat(value) : +value
        }
    }

    return state;
};

const setOperation = (state, operation) => {
    if (Validator.isValidOperation(operation)) {
        const { temp, value } = state;
        return {
            operation,
            temp: temp ? calculate(temp, state.operation, value) : value,
            value: null
        }
    }

    return state;
};

const setResult = state => {
    return {
        ...initialState,
        value: calculate(state.temp, state.operation, state.value)
    }
};

export default function calc(state = initialState, action) {

    switch(action.type) {

        case Actions.RESET:
            return initialState;

        case Actions.EVAL:
            return setResult(state);
            // return {
            //     value: eval(state.result),
            //     result: ''
            // };

        case Actions.DIGIT:
            return setDigit(state, action.value);

        case Actions.OPERATION:
            return setOperation(state, action.value);

        default:
            return state;
    }

};