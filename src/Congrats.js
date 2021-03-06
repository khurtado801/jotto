import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
const Congrats = (props) => {
	if (props.success) { // #Check if props success is truthy
		return (
			<div data-test="component-congrats">
				<span data-test="congrats-message">
                    Congratulations! You guessed the word!
				</span>
			</div>
		);
	} else {
		return (
			<div data-test="component-congrats" />
		);
	}
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congrats;