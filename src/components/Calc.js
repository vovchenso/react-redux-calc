import React from 'react';
import PropTypes from 'prop-types';

import Screen from './Screen';
import Keyboard from './Keyboard';


const Calc = ({ value, pressed, action }) => (

    <main>
        <Screen value={ value }/>
        <Keyboard
            active={ pressed }
            onClick={ action }
        />
    </main>

);

Calc.propTypes = {
    action: PropTypes.func.isRequired,
    value: PropTypes.string,
    pressed: PropTypes.string
};

export default Calc;
