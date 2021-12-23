import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SharedButton extends Component {
    render() {
        return (
            <button>
                
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;
