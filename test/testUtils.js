import checkPropTypes from 'check-prop-types';

/**
 * #Define findByTestAttr
 * Takes shallow wrapper from enzyme
 * And a value for the data-test attribute
 */
export const findByTestAttr = (wrapper, val) => {
	// #Run find method on shallow wrapper, takes css or jquery styles selector, value is the value passed into function
	return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name);
	expect(propError).toBeUndefined();
};