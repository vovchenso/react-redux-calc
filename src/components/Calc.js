import React from 'react';
import PropTypes from 'prop-types';

import Screen from './Screen';
import Keyboard from './Keyboard';


const Calc = ({ value, temp, operation, pressed, action }) => (

    <main>
        <Screen
            value={ value }
            temp={ temp }
            operation={ operation }
        />
        <Keyboard
            active={ pressed }
            onClick={ action }
        />
    </main>

);

Calc.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string,
    temp: PropTypes.number,
    operation: PropTypes.string,
    pressed: PropTypes.string
};

export default Calc;
