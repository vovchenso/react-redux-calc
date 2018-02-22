import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import * as Actions from '../constants/actions';


const Keyboard = ({ active, onClick }) => (

    <section className="keyboard">

        <div>
            <Button
                label="7"
                active={ '7' === active }
                onClick={ () => onClick(Actions.DIGIT, 7) }
            />
            <Button
                label="8"
                active={ '8' === active }
                onClick={ () => onClick(Actions.DIGIT, 8) }
            />
            <Button
                label="9"
                active={ '9' === active }
                onClick={ () => onClick(Actions.DIGIT, 9) }
            />
            <Button
                label="+"
                active={ '+' === active }
                type="operation"
                onClick={ () => onClick(Actions.OPERATION, '+') }
            />
        </div>

        <div>
            <Button
                label="4"
                active={ '4' === active }
                onClick={ () => onClick(Actions.DIGIT, 4) }
            />
            <Button
                label="5"
                active={ '5' === active }
                onClick={ () => onClick(Actions.DIGIT, 5) }
            />
            <Button
                label="6"
                active={ '6' === active }
                onClick={ () => onClick(Actions.DIGIT, 6) }
            />
            <Button
                label="-"
                active={ '-' === active }
                type="operation"
                onClick={ () => onClick(Actions.OPERATION, '-') }
            />
        </div>

        <div className="flex">
            <div>
                <div>
                    <Button
                        label="1"
                        active={ '1' === active }
                        onClick={ () => onClick(Actions.DIGIT, 1) }
                    />
                    <Button
                        label="2"
                        active={ '2' === active }
                        onClick={ () => onClick(Actions.DIGIT, 2) }
                    />
                    <Button
                        label="3"
                        active={ '3' === active }
                        onClick={ () => onClick(Actions.DIGIT, 3) }
                    />
                </div>
                <div>
                    <Button
                        label="AC"
                        active={ 'Backspace' === active }
                        type="operation"
                        onClick={ () => onClick(Actions.CLEAR) }
                    />
                    <Button
                        label="0"
                        active={ '0' === active }
                        onClick={ () => onClick(Actions.DIGIT, 0) }
                    />
                    <Button
                        label="."
                        active={ '-' === active }
                        onClick={ () => onClick(Actions.DIGIT, '.') }
                    />
                </div>
            </div>
            <Button
                label="="
                active={ 'Enter' === active }
                type="operation"
                onClick={ () => onClick(Actions.EVAL) }
            />
        </div>

    </section>

);

Keyboard.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.string
};

export default Keyboard;

