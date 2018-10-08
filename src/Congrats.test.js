import React from 'react';
import Enzyme, { shallow } from 'enzyme'; // #Destructure shallow function from enzyme
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

// #Configure enzyme to use imported enzyme adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * #Setup function that to make a shallow wrapper out of Congrats component
 * Pass in success props of false and success props of true for each relative test,
 * props is empty object by default, use object because we need key/value pairs: e.g. success: true
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />); // #Return shallow on Congrats component with whatever props are given, spread operator takes whatever is in props object and turns them into key/value pairs
};

// #Test render without crashing
test('render without error', () => {
	const wrapper = setup(); // #Create wrapper using our setup function
	const component = findByTestAttr(wrapper, 'component-congrats'); // #Find component by data attribute value
	expect(component.length).toBe(1); // #Error, we are expecting there to be one component
});

// #Test to ensure that no text is rendered when success prop is false
test('renders no text when `success` prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, 'component-congrats'); // #Find component by data attribute value
	expect(component.text()).toBe('');
});

// #Test to ensure that it renders a non-empty congratulatory message when success prop is true
test('renders non-empty congrats message when `success` is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);
});

// #Test to ensure that when we have the props we expect we will not get an error
test('does not throw warning with expected props', () => {
	const expectedProps = { success: false }; // #Check that props is boolean
	checkProps(Congrats, expectedProps);
});