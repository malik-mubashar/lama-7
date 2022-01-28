import React, { useContext } from 'react';
import { RootContext } from '../../context/index'

const About = () => {
	const {
		testValue, setTestValue
	} = useContext(RootContext);

	return (
		<div>
			{testValue}
		</div>
	)
}


export default About;
