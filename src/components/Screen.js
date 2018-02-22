import React from 'react';
import PropTypes from 'prop-types';


const Screen = ({ value, temp, operation }) => (

    <section className="screen">
        <div className="temp">{ temp }</div>
        <div>{ value }</div>
        <span>{ operation }</span>
    </section>

);

Screen.propTypes = {
    value: PropTypes.number,
    temp: PropTypes.number,
    operation: PropTypes.string
};

export default Screen;
