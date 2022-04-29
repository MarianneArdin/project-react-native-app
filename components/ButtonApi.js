import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styled from 'styled-components/native';
import * as Sharing from 'expo-sharing';
import * as Location from 'expo-location';
import { Button } from 'react-native-web';

const ButtonApi = () => {
	const [quote, setQuote] = useState({});
	const [isSharingAvailable, setIsSharingAvailable] = useState(false);
	const [location, setLocation] = useState(null);

	const checkSharingAvailability = () => {
		Sharing.isAvailableAsync().then((isAvailable) => {
			setIsSharingAvailable(isAvailable);
		});
	};
	const share = () => {
		if (isSharingAvailable) {
			getLocation();
			const link = generateLinkToShare();
			Sharing.shareAsync(link);
		} else {
			console.log('sharing is not available on this app');
		}
	};
	const generateQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((response) => response.json())
			.then((data) => setQuote(data));
	};
	const APIButton = styled.TouchableOpacity`
		font-weight: 700;
		width: 50%;
		background-color: tomato;
	`;
	////
	const openGoogleMaps = async () => {
		///////////// V1 .then syntax
		// Location.requestForegroundPermissionsAsync().then(data => {
		//     if (data.status !== 'granted') {
		//         console.log('Permission to access location was denied');
		//       } else {
		//         Location.getCurrentPositionAsync({}).then(location => {
		//             setLocation(location);
		//             Linking.openURL(`http://www.google.com/maps/place/${location.coords.latitude},${location.coords.longitude}`);
		//         });
		//       }
		// })

		////////////////////// V2 async await
		const data = await Location.requestForegroundPermissionsAsync();
		if (data.status !== 'granted') {
			console.log('Permission to access location was denied');
		} else {
			const location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			Linking.openURL(
				`http://www.google.com/maps/place/${location.coords.latitude},${location.coords.longitude}`
			);
		}
	};
	const generateLinkToShare = () => {
		return `http://www.google.com/maps/place/${location.coords.latitude},${location.coords.longitude}`;
	};

	//    const openGoogleMaps = () => {
	//         getLocation();
	//         const link = generateLinkToShare();
	//         Linking.openURL(link);
	//     }

	////

	// useEffect(()=> {
	//     generateQuote();
	// }, []);
	{
		/* <Button title="Share" onPress={share}/> */
	}

	return (
		<View>
			<Text>{quote.content}</Text>
			<Text>{quote.author}</Text>
			<APIButton onPress={openGoogleMaps}>
				<Text>Open maps</Text>
			</APIButton>
		</View>
	);
};

export default ButtonApi;
