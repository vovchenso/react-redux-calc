import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, type, active }) => {
    const classNames = [type];
    active && classNames.push('active');

    return (
        <button className={ classNames.join(' ') } onClick={ onClick }>
            { label }
        </button>

    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    active: PropTypes.bool,
};

Button.defaultProps = {
    type: 'default',
    active: false
};

export default Button;