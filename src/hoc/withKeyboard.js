import React, { Component } from 'react';
import * as Actions from '../constants/actions';

const withKeyboard = WrappedComponent => {

    return class extends Component {

        state = {
            key: null
        };

        handleKeyDown = ({ key }) => {
            if (this.state.key === key) {
                return;
            }

            const { action } = this.props;

            if (key === 'Enter') {
                action(Actions.EVAL);
                this.setState({ key });
            }

            if (key === 'Backspace') {
                action(Actions.CLEAR);
                this.setState({ key });
            }

            if (/[\+\-]{1}/.test(key)) {
                action(Actions.OPERATION, key);
                this.setState({ key });
            }

            if (/[\d\.]{1}/.test(key)) {
                action(Actions.DIGIT, key);
                this.setState({ key });
            }
        };

        handleKeyUp = () => {
            this.setState({ key: null });
        };

        constructor(props) {
            super(props);
        }

        componentDidMount() {
            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('keyup', this.handleKeyUp);
        }

        componentWillUnmount() {
            window.removeEventListener('keydown', this.handleKeyDown);
            window.removeEventListener('keyup', this.handleKeyUp);
        }

        render() {
            const { key } = this.state;

            return (
                <WrappedComponent
                    pressed={ key }
                    { ...this.props }
                />
            );
        }

    };

};

export default withKeyboard;
