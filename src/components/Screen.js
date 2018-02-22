import React from 'react';
import PropTypes from 'prop-types';


const Screen = ({ value, current }) => (

    <section className="screen">
        <div>{ value }</div>
        <div>{ current }</div>
    </section>

);

Screen.propTypes = {
    value: PropTypes.string,
    current: PropTypes.string
};

export default Screen;
