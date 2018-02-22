const calcReducer = require('../../../src/store/reducers/calc').default;
const Actions = require('../../../src/constants/actions');

const initialState = {
    temp: null,
    value: '0',
    operation: ''
};

test('initial state', () => {
    const result = calcReducer(initialState, {});
    expect(result).toBe(initialState);

    const resultNull = calcReducer(null, {});
    expect(resultNull).toBeNull();
});

test('reset action', () => {
    const result = calcReducer(initialState, { type: Actions.RESET });
    expect(result).toEqual(initialState);
    expect(result).not.toBe(initialState);
});

test('digit action invalid value', () => {
    const cases = ['test', 10, ' ', '...'];
    cases.forEach(value => {
        const result = calcReducer(initialState, { type: Actions.DIGIT, value });
        expect(result).toBe(initialState);
    });
});

test('digit action valid value', () => {
    const cases = [1, 2, 0, '3', '.'];
    cases.forEach(value => {
        const result = calcReducer(initialState, { type: Actions.DIGIT, value });
        expect(result).toEqual({
            ...initialState,
            value: value.toString()
        });
    });
});

test('digit action value concat', () => {
    const cases = [1, 2, 0, '.', '3'];
    let concat = '';
    let state = Object.assign({}, initialState);
    cases.forEach(value => {
        concat = concat.concat(value);
        state = calcReducer(state, { type: Actions.DIGIT, value });
        expect(state).toEqual({
            ...initialState,
            value: concat
        });
    });
});