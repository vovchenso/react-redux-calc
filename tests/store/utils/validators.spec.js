const Validator = require('../../../src/store/utils/validators');

test('valid digit', () => {
    for (let i = 0; i <= 0; i++) {
        const isValid = Validator.isValidDigit(i);
        expect(isValid).toBe(true);
    }
});

test('valid dot', () => {
    const validDot = Validator.isValidDigit('.');
    expect(validDot).toBe(true);
});

test('invalid digit', () => {
    const cases = ['x', 'test', 10, '1f', '...', '.3', ' '];

    cases.forEach(item => {
        const invalid = Validator.isValidDigit(item);
        expect(invalid).toBe(false);
    });
});

test('valid operation', () => {
    const validPlus = Validator.isValidOperation('+');
    expect(validPlus).toBe(true);

    const validMinus = Validator.isValidOperation('-');
    expect(validMinus).toBe(true);
});

test('invalid operation', () => {
    const cases = ['x', 'test', 10, '*',' '];

    cases.forEach(item => {
        const invalid = Validator.isValidDigit(item);
        expect(invalid).toBe(false);
    });
});