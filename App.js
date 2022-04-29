import React, { useState } from 'react';
import styled from 'styled-components/native';
import GitFetch from './components/GitFetch';
import GitDisplay from './components/GitDisplay';
// import { Input } from './react-native';

const Container = styled.View`
	flex: 1;
	background-color: darkgrey;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: black;
`;

const App = () => {
	return (
		<Container>
			<Avatar source={require('./assets/github.png')} />
			<Title>GitHub timeline</Title>
			<Title>Enter your GitHub username:</Title>
			{/* <label htmlFor='username' */}
			{/* <Input value {username}/> */}
			{/* onChangeText={(text) => setMessage(text)} */} 
		</Container>
	);
};

const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	background: darkgrey;
	border-radius: 22px;
	position: absolute;
	top: 100px;
`;

export default App;
