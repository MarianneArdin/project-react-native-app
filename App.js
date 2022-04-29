import React from 'react';
import styled from 'styled-components/native';
import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Button'>
				<Drawer.Screen name='Button' component={ButtonApi} />
				<Drawer.Screen name='Shake' component={ShakeApi} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
