import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { API_URL } from '../utils/urls';

/*Emma said I have to fetch and display, mount to show*/
const GitFetch = (props) => {
	const [message, setMessage] = useState('');
};

const handleSubmit = (event) => {
	event.preventDefault();
	fetch(
		{ API_URL },
		{
			method: 'POST',
			body: JSON.stringify({ message }),
			headers: { 'Content-Type': 'application/json' },
		}
	)
		.then(() => {
			setMessage('');
			props.onFormSubmit(message);
		})
		.catch((err) => console.log('error:', err));
};

export default GitFetch;
